//React & MUI Imports
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

// Session Authenticator
import Auth from '../utils/Auth';

const drawerWidth = 240;
// let navItems = ['Home', 'Sign In', 'Sign Up'];

function NavBar (props) {

    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const isLogged = Auth.loggedIn();
        console.log(isLogged);
        if (!isLogged) setNavItems([
            {name: 'Home', url: '/'},
            {name: 'Sign In', url: '/signin'},
            {name: 'Sign Up', url: '/signup'}
        ])
        if (isLogged) setNavItems([
            {name: 'Home', url: '/profile'},
            {name: 'Sign Out', url: '/'}
        ]);
    }, []);


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={ handleDrawerToggle } sx={ { textAlign: 'center' } }>
            <Typography variant="h6" sx={ { my: 2 } }>
                DevConnect
            </Typography>
            <Divider />
            <List>
                { navItems.map((item) => (
                    <Link to={item.url} style={{textDecoration: 'none', textAlign: 'center'}}>
                        <ListItem key={ item.name } disablePadding>
                            <ListItemButton sx={ { textAlign: 'center' } }>
                                    <ListItemText primary={ item.name } />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                )) }
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="nav-bar" sx={ { display: 'flex' } }>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={ handleDrawerToggle }
                        sx={ { mr: 2, display: { sm: 'none' } } }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={ { flexGrow: 1, display: { xs: 'block'} } }
                    >
                        DevConnect
                    </Typography>
                    <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
                        { navItems.map((item) => (
                            <Link to={item.url} style={{textDecoration: 'none'}}>
                                <Button key={ item.name } sx={ { color: '#fff' } }>
                                    { item.name }
                                </Button>
                            </Link>
                        )) }
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={ container }
                    variant="temporary"
                    open={ mobileOpen }
                    onClose={ handleDrawerToggle }
                    ModalProps={ {
                        keepMounted: true, // Better open performance on mobile.
                    } }
                    sx={ {
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    } }
                >
                    { drawer }
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavBar;