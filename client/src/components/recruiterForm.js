//React & MUI Imports
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RECRUITER } from '../utils/mutations';

import Auth from '../utils/Auth';

export default function RecruiterForm() {

  const [recruiter, setRecruiter] = useState({})
  const [addRecruiter, { loading, error, data }] = useMutation(ADD_RECRUITER);

  const handleChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setRecruiter({ ...recruiter, [name]: value });
  }

  const handleClick = async () => {
    console.log(recruiter)
      try {
      const { data } = await addRecruiter({
          variables: { ...recruiter },
      });
      Auth.loginRecruiter(data.loginFreelancer.token);
      } catch (e) {
      console.error(e);
      }
  }

  return (
    <Container>
      <Grid>
      
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        > 

          <Paper elevation={10}> 
            <Grid className='freelancer-form' align='center'>
                <h2>Welcome! Please fill this Recruiter form!</h2>
            </Grid>
            <div>
                <TextField
                  required
                  id=""
                  label="Name"
                  name="firstName"
                  onChange={handleChange}
                />
                <TextField
                  required
                  id=""
                  label="Surname"
                  name="lastName"
                  onChange={handleChange}
                />
                <div>
                <TextField
                  required
                  id=""
                  label="Company Name"
                  name="company"
                  onChange={handleChange}
                />
                </div>
                <div>
                <TextField
                  required
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                />
                <TextField
                  required
                  id=""
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
                </div>
                <TextField
                  id=""
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
                <TextField
                  id=""
                  label="Confirm password"
                  type="password"
                  autoComplete="current-password"
                />
                <div>
                <Button className='buttons' sx={ { m: 3 } } variant="contained" onClick={handleClick}>
                  Sign Up
                </Button>
                </div>
              </div>
              </Paper>
            </Box>
        </Grid>
      </Container>
  );
}
