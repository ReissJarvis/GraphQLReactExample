import { ChangeEvent, FC, useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from '@material-ui/core';
import { DOG_PICTURE_MOCK_DATA } from './dog-picture-card.mock-data';

interface DogPictureSelectionProps {
    listLoading: boolean
    breed: string
    breeds: string[]
    onChange: (breed: string) => void
}

interface DogServiceBreedsResult {
    [ breed: string ]: string[]
}

const DogPictureBreedSelection: FC<DogPictureSelectionProps> = ({breed, breeds, listLoading, onChange}) => {

    function handleChange(e: ChangeEvent<{ name?: string, value: unknown }>) {
        onChange(e.target.value as string)
    }

    return (
        <>
            {
                listLoading
                    ? <CircularProgress size={20}/>
                    : <FormControl>
                        <InputLabel>Breed</InputLabel>
                        <Select
                            value={breed}
                            onChange={(e) => handleChange(e)}
                            autoWidth
                        >
                            {
                                breeds.map(b =>
                                    <MenuItem value={b}>{b}</MenuItem>
                                )
                            }

                        </Select>
                    </FormControl>
            }
        </>
    )
}

export const DogPictureCard: FC = () => {
    const [breeds, setBreeds] = useState<string[]>([]);
    const [breed, setBreed] = useState<string>('')
    const [listLoading, setListLoading] = useState<boolean>(false);

    function getMappedBreeds(breedsResult: DogServiceBreedsResult): string[] {
        return Object.keys(breedsResult).reduce((mappedBreeds: string[], breedKey) => {
            if (breedsResult[ breedKey ].length) {
                return [
                    ...mappedBreeds,
                    breedKey,
                    ...breedsResult[breedKey].map(subBreed => `${breedKey}/${subBreed}`)
                ]
            }

            return [...mappedBreeds, breedKey]
        }, [])
    }

    useEffect(() => {
        return () => {
            setListLoading(true)

            setTimeout(() => {
                const mappedBreeds = getMappedBreeds(DOG_PICTURE_MOCK_DATA)
                setBreeds(mappedBreeds)

                setListLoading(false)
            }, 2000)
        };
    }, []);

    useEffect(() => {
        return () => {
            console.log("Running breed change effect")
            //TODO: Get Photo here and set state
        };
    }, [breed]);


    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Dog Images
                </Typography>

                <DogPictureBreedSelection
                    breed={breed}
                    breeds={breeds}
                    listLoading={listLoading}
                    onChange={setBreed}
                />

                Selected Breed: {breed}
            </CardContent>
        </Card>
    )
}
