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
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Grid>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" noValidate
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}>
              <div>
                <TextField
                  margin="normal"
                  autoFocus
                  variant="outlined"
                  focused
                  required
                  id="name"
                  label="Name"
                  name="Recruiter"
                />
                <TextField
                  margin="normal"
                  autoFocus
                  variant="outlined"
                  focused
                  required
                  id="surname"
                  label="Surname"
                  name="Recruiter"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  autoFocus
                  variant="outlined"
                  focused
                  required
                  id="company-name"
                  label="Company Name"
                  name="Recruiter"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  autoFocus
                  variant="outlined"
                  focused
                  required
                  id="phone"
                  label="Phone Number"
                  name="Recruiter"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  autoFocus
                  variant="outlined"
                  focused
                  required
                  id="email"
                  label="Email"
                  name="Recruiter"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  autoFocus
                  variant="outlined"
                  focused
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  autoFocus
                  variant="outlined"
                  focused
                  id="password-confirm"
                  label="Confirm password"
                  type="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </div>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Paper>
  );
}
