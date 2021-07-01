import { FC, useEffect, useState } from 'react';
import { Box, Card, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { Error } from '@material-ui/icons';

export const DogFactCard: FC = () => {

    const [loading, setLoading] = useState(true)
    const [fact, setFact] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('http://localhost:8080/fact')
            .then(result => result.text()
                    .then(text => {
                        if (!result.ok) {
                            return Promise.reject(text)
                        }

                        return text
                    })
            )
            .then(
                (result) => {
                    setLoading(false)
                    setFact(result)
                },
                (err) => {
                    setLoading(false)
                    setError(err)
                }
            )
    }, [fact, error]);
    
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Dog Fact
                </Typography>

                { loading && <CircularProgress /> }

                { fact &&
                    <Typography color='textPrimary'>
                        { fact }
                    </Typography>
                }

                { error &&
                    <Box flexDirection="row">
                        <Error/>
                        <Typography color="error"> Error Fetching Dog Fact: {error}</Typography>
                    </Box>
                }
            </CardContent>
        </Card>
    )
}
