//React & MUI Imports
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function RecruiterForm() {

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
                <h2>Profile Form</h2>
            </Grid>
            <div>
                <TextField
                  required
                  id=""
                  label="Name"
                  name="Recruiter"
                />
                <TextField
                  required
                  id=""
                  label="Surname"
                  name="Recruiter"
                />
                <div>
                <TextField
                  
                  required
                  id=""
                  label="Company Name"
                  name="Recruiter"
                />
                </div>
                <div>
                <TextField
                  required
                  id="phone"
                  label="Phone Number"
                  name="Recruiter"
                />
                <TextField
                  required
                  id=""
                  label="Email"
                  name="Recruiter"
                />
                </div>
                <TextField
                  id=""
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField
                  id=""
                  label="Confirm password"
                  type="password"
                  autoComplete="current-password"
                />
                <div>
                <Button className='buttons' sx={ { m: 3 } } variant="contained">
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
