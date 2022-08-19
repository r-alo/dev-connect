import React, { useState } from 'react'
import { Grid, Paper, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material'

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/Auth';
import { Container } from '@mui/system';
import NavBar from '../components/navBar';

export default function Signup() {
    
    const [age, setAge] = useState('');
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { data, loading, error }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <Grid>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <Paper className='sign-up' elevation={10}>
                <Grid align='center'>
                    <h2>Sign up</h2>
                </Grid>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Account type</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem>Freelancer</MenuItem>
                        <MenuItem>Recruiter</MenuItem>
                    </Select>
                </FormControl>
                <Container>
                    {/* Render del form */}
                </Container>
                <Button type='submit' color='primary' variant="contained"  onClick={handleFormSubmit}>Sign up</Button>
                <p>Already have an account? <a href='/login'>Log in</a></p>
            </Paper>
        </Grid>
    );
}