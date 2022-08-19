import React, { useState } from 'react'
import { Grid, Paper, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material'

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/Auth';
import { Container } from '@mui/system';

export default function Signup() {
    
    const [type, setType] = useState('');
    

    return (
        <Grid>
            <Paper className='sign-up' elevation={10}>
                <Grid align='center'>
                    <h2>Sign up</h2>
                </Grid>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Account type</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={type}

                        label="type"
                    >
                        <MenuItem>Freelancer</MenuItem>
                        <MenuItem>Recruiter</MenuItem>
                    </Select>
                </FormControl>
                <Container>
                    {/* Render del form */}
                </Container>
                <Button type='submit' color='primary' variant="contained"  >Sign up</Button>
                <p>Already have an account? <a href='/login'>Log in</a></p>
            </Paper>
        </Grid>
    );
}