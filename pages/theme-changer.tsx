import { useState, useEffect, ChangeEvent } from 'react';
import { GetServerSideProps } from 'next'
import { 
       Button,
       Card, 
       CardContent, 
       FormControl, 
       FormLabel, 
       RadioGroup, 
       FormControlLabel, 
       Radio } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Layout } from '@/components/layouts';

interface Props {
    theme: string
}

const ThemeChangerPage = ({ theme }: Props) => {

    const [currentTheme, setCurrentTheme] = useState<string>(theme);

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value;

        setCurrentTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
        Cookies.set('theme', selectedTheme);
    }

    useEffect(() => {
        console.log('LocalStorage', localStorage.getItem('theme'));
        console.log('Cookies', Cookies.get('theme'));
    }, [])

    const onClick = async() => {
        const { data } = await axios.get('/api/hello');

        console.log({ data });
    }
    
    
    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Theme</FormLabel>
                        <RadioGroup value={currentTheme} onChange={onThemeChange}>
                            <FormControlLabel 
                                value="light"  
                                control={<Radio />}
                                label="Light"
                            />

                            <FormControlLabel 
                                value="dark"  
                                control={<Radio />}
                                label="Dark"
                            />

                            <FormControlLabel 
                                value="custom"  
                                control={<Radio />}
                                label="Custom"
                            />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        onClick={onClick}
                    >
                        Application
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { theme  = 'light', name = 'No name' } = req.cookies;

    const validTheme = ['light', 'dark', 'custom'];

    return {
        props: {
            theme: validTheme.includes(theme) ? theme : 'dark'
        }
    }
}

export default ThemeChangerPage