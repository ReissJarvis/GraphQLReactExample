import { FC } from 'react';
import { DogFactCard } from './dashboard/dog-fact.card';
import { Grid } from '@material-ui/core';

export const HomePage: FC = () => {

    return (
        <>
            Im the Homepage
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <DogFactCard/>
            </Grid>

        </>
    )
}
