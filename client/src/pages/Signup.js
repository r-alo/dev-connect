import React, { useState } from 'react'
import { Grid, Paper, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import FreelancerForm from '../components/FreelancerForm';
import RecruiterForm from '../components/RecruiterForm';

import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import Auth from '../utils/Auth';

export default function Signup() {
    
    const [type, setType] = useState('');
    const handleChange = (event) => {
        setType(event.target.value);
    };

    if (type === 'freelancer') {
        return (<FreelancerForm />)
    }
    if (type === 'recruiter') {
        return (<RecruiterForm />)
    }

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
                        onChange={handleChange}
                        label="type"
                    >
                        <MenuItem value={'freelancer'}>Freelancer</MenuItem>
                        <MenuItem value={'recruiter'}>Recruiter</MenuItem>
                    </Select>
                </FormControl>
                <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
            </Paper>
        </Grid>
    );
}