import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import Cookies from 'js-cookie';
import { customTheme, darkTheme, lightTheme } from '../theme';
import '@/styles/globals.css';


function App({ Component, pageProps }: AppProps) {

    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    useEffect(() => {
        const cookieTheme = Cookies.get('theme') || 'light';
    
        const selectedTheme: Theme = cookieTheme === 'light' 
        ? lightTheme : cookieTheme === 'dark' 
        ? darkTheme
        : customTheme; 

        setCurrentTheme(selectedTheme);
    }, [])
    


    return(
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}


// App.getInitialProps = async( appContext: AppContext) => {
//     const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any).cookies : { theme: 'light' }

//     const validTheme = ['light', 'dark', 'custom'];

//     return {
//         props: {
//             theme: validTheme.includes(theme) ? theme : 'dark'
//         }
//     }
// }

export default App
