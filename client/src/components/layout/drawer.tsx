import React, { FC } from 'react'
import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { Casino, Home } from '@material-ui/icons'
import {Link} from 'react-router-dom'
export const LayoutDrawer: FC = () => {

    const useStyles = makeStyles((theme) => ({
        toolbar: theme.mixins.toolbar,
        title: {
            "padding-top": "15px"
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} >
                <Typography variant="h6" className={classes.title}>
                    React Playground
                </Typography>
            </div>
            <Divider />
            <List>

                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>

                <ListItem button component={Link} to="/dice">
                        <ListItemIcon>
                            <Casino/>
                        </ListItemIcon>
                        <ListItemText primary="Dice"/>
                </ListItem>
            </List>
        </div>
    )
}
