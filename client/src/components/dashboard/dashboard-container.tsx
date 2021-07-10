import { FC } from 'react';
import { DogFactCard } from './dog-fact.card';
import { Grid } from '@material-ui/core';
import { DogPictureCard } from './dog-picture.card';

export const DashboardContainer: FC = () => {

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {/*<DogFactCard/>*/}
                <DogPictureCard/>
            </Grid>
        </>
    )
}
