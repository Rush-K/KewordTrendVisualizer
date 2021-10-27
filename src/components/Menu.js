import React, { Component } from 'react';
import { Box, Paper, Divider, 
         List, ListItem, ListItemIcon, ListItemText, ListItemButton,
         styled, createTheme, ThemeProvider, SvgIcon } from '@mui/material';

import PannIcon from '../icon/pann.svg';
import TheQooIcon from '../icon/theqoo.svg';
import RuriwebIcon from '../icon/ruriweb.png';

const media = [
    { icon: TheQooIcon, label: '더쿠' },
    { icon: PannIcon, label: '네이트판'},
    { icon: RuriwebIcon, label: '루리웹'}
];

const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  });

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Box sx={{ display: "flex" }}>
                <ThemeProvider
                    theme={createTheme({
                        components: {
                            MuiListItemButton: {
                                defaultProps: {
                                disableTouchRipple: true,
                                },
                            },
                        },
                        palette: {
                            mode: 'dark',
                            primary: { main: 'rgb(102, 157, 246)' },
                            background: { paper: 'rgb(5, 30, 52)' },
                        },
                        typography: {
                            fontFamily: 'baemin',
                        }
                })}>
                    <Paper elevation={0} sx={{ width: 256, height: "100vh" }}>
                        <FireNav component="nav" disablePadding>
                            <ListItemButton component="a" href="/visualizer">
                                <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                                <ListItemText
                                    sx={{ my: 0 }}
                                    primary="Keyword"
                                    primaryTypographyProps={{
                                    fontSize: 20,
                                    fontWeight: 'medium',
                                    letterSpacing: 0,}}/>
                            </ListItemButton>
                            <Divider />
                            <ListItem sx={{bgcolor: "rgba(71, 98, 130, 0.2)"}}>
                            <ListItemText
                                primary="커뮤니티 목록"
                                primaryTypographyProps={{
                                    fontSize: 20,
                                    fontWeight: 'medium',
                                    lineHeight: '30px',
                                    mb: '2px',
                                }}
                                secondary="다양한 키워드를 알아보세요!"
                                secondaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: 12,
                                    lineHeight: '16px',
                                    color: 'rgba(255,255,255,0.5)',
                                }}
                                sx={{ my: 0 }}/>
                            </ListItem>
                            <Divider />
                            {media.map((item) => (
                                <ListItemButton
                                key={item.label}
                                sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <img style={{ height: "3vh" }} src={item.icon}/>
                                    </ListItemIcon>
                                    <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 15, fontWeight: 'medium' }}
                                    />
                                </ListItemButton>
                            ))}
                            <Divider />
                        </FireNav>
                    </Paper>
                </ThemeProvider>
            </Box>
        );
    }
}

export default Menu;