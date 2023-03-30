import NextLink from 'next/link';
import { AppBar, Link, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
    return (
        <AppBar position='static' elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                >
                    <MenuOutlined />
                </IconButton>

                <Link component={NextLink} href="/">
                    <Typography variant='h6' color="white">Cookie Master</Typography>
                </Link>

                <div style={{flex: 1}} />

                <Link component={NextLink} href="/theme-changer">
                    <Typography variant='h6' color="white">Change theme</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
