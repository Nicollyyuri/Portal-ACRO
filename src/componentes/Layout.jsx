import React from 'react';
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children, title }) => {
    return (
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ zIndex: 1201 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>ACRO</Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': { 
                            width: drawerWidth, 
                            boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <List>
                        <ListItem button component={Link} to="/dashboard"><ListItemText primary="Dashboard" /></ListItem>
                        <ListItem button component={Link} to="/boletos"><ListItemText primary="Boletos" /></ListItem>
                        <ListItem button component={Link} to="/obras"><ListItemText primary="Obras" /></ListItem>
                        <ListItem button component={Link} to="/assistencia"><ListItemText primary="Assistência" /></ListItem>
                        <ListItem button component={Link} to="/documentos"><ListItemText primary="Documentos" /></ListItem>
                    </List>
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 3, ml: drawerWidth + 'px' }}>
                <Toolbar />
                {children}
            </Box>
        </Box >
    );
};

export default Layout;
