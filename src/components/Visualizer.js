import React, { Component } from 'react';
import { Typography, Box, AppBar, Toolbar, Button, IconButton, 
         Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Menu, Inbox, Mail } from '@mui/icons-material';
import { withStyles } from '@mui/styles';

const useStyles = (theme) => ({
    background: {
        background: "rgb(240,240,240)",
        width: "100%",
        height: "100vh"
    }
});

class Visualizer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="background" className={classes.background}>
                <div id="appbar">
                    <Box sx={{ display: "flex" }}>
                        <AppBar style={{background: "rgb(50,50,50)"}} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                            <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <Menu />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "baemin"}}>
                                Keyword Trend Visualizer
                            </Typography>
                            <Button color="inherit">Past Page</Button>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            variant="permanent"
                            sx={{
                            width: "240",
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: "240", boxSizing: 'border-box', background: "rgb(100,100,100)" },
                            }}
                        >
                            <Toolbar />
                            <Box sx={{ overflow: 'auto' }}>
                            <List>
                                {['1', '2', '3', '4'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} style={{color: "rgb(255,255,255)"}} />
                                </ListItem>
                                ))}
                            </List>
                            <Divider />
                            </Box>
                        </Drawer>
                    </Box>
                </div>
            </div>

        );
    }
}

export default withStyles(useStyles)(Visualizer);