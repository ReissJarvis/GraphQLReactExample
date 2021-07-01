import { createStyles, Drawer, makeStyles } from '@material-ui/core';
import { LayoutDrawer } from './drawer';
import React, { FC } from 'react';

const drawerWidth = 240;

const useStyles = makeStyles(() =>
    createStyles({
        drawerPaper: {
            width: drawerWidth,
        },
    }),
)

export const AppNavBar: FC = () => {
    const classes = useStyles()

    return (
        <nav aria-label="mailbox folders">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                variant="permanent"
                open = {true}
            >
                <LayoutDrawer />
            </Drawer>
        </nav>
    )
}
