import React from 'react'
import { Grid, Paper, TextField, Button } from '@mui/material'

export default function Login() {
    return(
        <Grid>
            <Paper className='log-in' elevation={10}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                <TextField className='log-in-input' label='username' placeholder='Username' fullWidth required/>
                <TextField className='log-in-input' label='password' placeholder='Password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
            </Paper>
        </Grid>
    );
}