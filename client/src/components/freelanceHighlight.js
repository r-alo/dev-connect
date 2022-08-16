import * as React from 'react';
import { Grid, Container, Avatar, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import {deepOrange} from '@mui/material/colors';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MainNav from './navBar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FreelanceHighlight () {
    return (
        <Container className='container-profile'>
            

            <Grid container spacing={ 1 }>
                <Grid className='avatar' xs={ 4 }><Avatar sx={ { bgcolor: deepOrange[500], width: 100, height: 100 } }>N</Avatar></Grid>
                <Grid xs={ 8 }>
                    <Card sx={ { minWidth: 275 } }>
                        <CardContent>
                            <Typography sx={ { fontSize: 14 } } color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                hola
                            </Typography>
                            <Typography sx={ { mb: 1.5 } } color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                { '"a benevolent smile"' }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br/>
            <Box  sx={ { width: '100%' } }>
                <Stack spacing={ 2 }>
                    <Item>Project 1</Item>
                    <Item>Project 2</Item>
                    <Item>Project 3</Item>
                </Stack>
            </Box>
            <br/>
            <Button variant="contained" disableElevation>
                View Full Profile
            </Button>
        </Container>
    )
}

export default FreelanceHighlight;