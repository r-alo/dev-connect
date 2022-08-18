import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function RecruiterForm() {

  return (
    <Container component="main" maxWidth="xs">
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <Typography component="h1" variant="h5">
            Sign in
          </Typography>
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <div>
        <TextField
        margin="normal"
        fullWidth
        autoFocus
        variant="outlined"
        color="success"
        focused
          required
          id=""
          label="Name"
          name="Recruiter"
        />
        <TextField
        margin="normal"
        fullWidth
        autoFocus
        variant="outlined"
        color="success"
        focused
          required
          id=""
          label="Surname"
          name="Recruiter"
        />
        <TextField
        margin="normal"
        fullWidth
        autoFocus
        variant="outlined"
        color="success"
        focused
          required
          id=""
          label="Company Name"
          name="Recruiter"
        />
        <TextField
        margin="normal"
        fullWidth
        autoFocus
        variant="outlined"
        color="success"
        focused
          required
          id=""
          label="Phone Number"
          name="Recruiter"
        />
        <TextField
        margin="normal"
        fullWidth
        autoFocus
        variant="outlined"
        color="success"
        focused
          required
          id=""
          label="Email"
          name="Recruiter"
        />
        <TextField
        margin="normal"
        fullWidth
        autoFocus
        variant="outlined"
        color="success"
        focused
          id=""
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
        margin="normal"
        fullWidth
        autoFocus
        variant="outlined"
        color="success"
        focused
          id=""
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
    </Container>
  );
}
