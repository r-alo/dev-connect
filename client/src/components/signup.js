import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import NavBar from './navBar';

export default function Signup() {
    const [type, setType] = useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <Grid>
            <NavBar />
            <br />
            <br />
            <br />
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
                        <MenuItem value={'freelance'}>Freelance</MenuItem>
                        <MenuItem value={'recruiter'}>Recruiter</MenuItem>
                    </Select>
                </FormControl>
                <p>Already have an account? <a href='/login'>Log in</a></p>
            </Paper>
        </Grid>
    );
}