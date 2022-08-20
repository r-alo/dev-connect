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
import { ME } from '../utils/queries';

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
    console.log(id);
    // const { loading, data } = useQuery(QUERY_MATCHUPS, {
    //     variables: { _id: id },
    // });


    return (
        <Container className='container-profile'>
            <Grid container spacing={ 1 }>
                <Grid className='avatar' xs={ 4 }><Avatar sx={ { bgcolor: deepOrange[500], width: 100, height: 100 } }>N</Avatar></Grid>
                <Grid xs={ 8 }>
                    <Card sx={ { minWidth: 275 } }>
                        <CardContent>
                            {/* <h1>{ data.me.firstName }'s Profile</h1>
                            <p><strong>Name: </strong>{ data.me.firstName } { data.me.lastName }</p>
                            <p><strong>Mail: </strong>{ data.me.email }</p>
                            <p><strong>Phone: </strong>{ data.me.phone }</p>
                            <p><strong>Github: </strong>{ data.me.github }</p> */}
                            <h1>name's Profile</h1>
                            <p><strong>Name: </strong>name</p>
                            <p><strong>Mail: </strong>mail</p>
                            <p><strong>Phone: </strong>phone</p>
                            <p><strong>Github: </strong>github</p>
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
            <Button variant="contained" disableElevation>
                View Full Profile
            </Button>
            <Button sx={ {margin: 5 } } href='/recruiter' variant="contained" disableElevation>
                Return
            </Button>
        </Container>
    )
}

export default FreelanceHighlight;