//React & MUI Imports
import * as React from 'react';
import { Grid, Container, Avatar, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import {deepOrange} from '@mui/material/colors';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useParams, Link } from 'react-router-dom';

// Apollo Client
import { useQuery } from '@apollo/client';
import { FREELANCER } from '../utils/queries';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FreelanceHighlight () {

    // Get data from GraphQL
    let { id } = useParams();
    const { loading, data } = useQuery(FREELANCER, {
        variables: { id },
    });

    if(loading){
        return <h2>Loading...</h2>
    }
    console.log(data);

    return (
        <Container className='container-profile'>
            <Grid container spacing={ 1 }>
                <Grid className='avatar' xs={ 4 }><Avatar sx={ { bgcolor: deepOrange[500], width: 100, height: 100 } }>{data.freelancer.firstName.charAt(0)}</Avatar></Grid>
                <Grid xs={ 8 }>
                    <Card sx={ { minWidth: 275 } }>
                        <CardContent>
                            <h1>{ data.freelancer.firstName }'s Profile</h1>
                            <p><strong>Name: </strong>{ data.freelancer.firstName } { data.freelancer.lastName }</p>
                            <p><strong>Mail: </strong>{ data.freelancer.email }</p>
                            <p><strong>Phone: </strong>{ data.freelancer.phone }</p>
                            <p><strong>Github: </strong>{ data.freelancer.github }</p>
                        </CardContent>
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
            {/* <Button variant="contained" disableElevation>
                View Full Profile
            </Button> */}
            <Button sx={ {margin: 5 } } href='/recruiter' variant="contained" disableElevation>
                Return
            </Button>
        </Container>
    )
}

export default FreelanceHighlight;