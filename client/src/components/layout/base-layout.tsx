import { Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { Box, createStyles, CssBaseline, makeStyles } from '@material-ui/core';
import { AppTitleBar } from './app-bar';
import { AppNavBar } from './app-nav';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        contentContainer: {
            left: "240px",
            position: "absolute",
            width: "calc(100% - 240px)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
)

export const BaseLayout: FC = ({children}) => {

    const classes = useStyles()
    return (
        <div className="App">
            <div className={classes.root}>
                <CssBaseline />
                <Box flexDirection="row">
                    <AppNavBar/>
                    <div className={classes.contentContainer}>
                        <AppTitleBar/>
                        <main className={classes.content}>
                            { children }
                        </main>
                    </div>
                </Box>
            </div>
        </div>
    );
}
