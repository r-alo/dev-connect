//React & MUI Imports
import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material'

import { useMutation } from '@apollo/client';
import { LOGIN_FREELANCER, LOGIN_RECRUITER } from '../utils/mutations';
import Auth from '../utils/Auth';

export default function Login() {

    //for menu
    const [type, setType] = useState('');
    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [loginFreelancer, { data: dataFreelancer, loading: loadingFreelancer, error: errorFreelancer }] = useMutation(LOGIN_FREELANCER);
    const [loginRecruiter, { data: dataRecruiter, loading: loadingRecruiter, error: errorRecruiter }] = useMutation(LOGIN_RECRUITER);

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
        if (type === 'freelancer') {
            try {
            const { data } = await loginFreelancer({
                variables: { ...formState },
            }); 
            Auth.loginFreelancer(data.loginFreelancer.token);
            } catch (e) {
            console.error(e);
            }
        };
        if (type === 'recruiter') {
            try {
            const { data } = await loginRecruiter({
                variables: { ...formState },
            }); 
            Auth.loginRecruiter(data.loginRecruiter.token);
            } catch (e) {
            console.error(e);
            }
        };

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return(
        <Grid>
            <Paper className='log-in' elevation={10}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Account type</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={type}
                        onChange={handleChangeType}
                        label="type"
                    >
                        <MenuItem value={'freelancer'}>Freelancer</MenuItem>
                        <MenuItem value={'recruiter'}>Recruiter</MenuItem>
                    </Select>
                </FormControl>
                <TextField className='log-in-input' label='email' placeholder='Email' name='email' value={formState.email} onChange={handleChange} fullWidth required/>
                <TextField className='log-in-input' label='password' placeholder='Password' type='password' name='password' value={formState.password} onChange={handleChange} fullWidth required/>
                <Button type='submit' color='primary' variant="contained" fullWidth onClick={handleFormSubmit}>Sign in</Button>
                <p>Dont have an account? <a href='/signup'>Sign up</a></p>
            </Paper>
        </Grid>
    );
}