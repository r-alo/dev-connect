//React & MUI Imports
import React from 'react';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
      <Container fixed text align= "left">
        <Typography variant="h2" gutterBottom>Start to Dev-connect!</Typography>
          <Typography variant="h5" gutterBottom>
            Welcome to the best professional network where you can find the best developers 
            and the most renewed companies from all around the world.
          </Typography>
          <Link to="/signup" 
          style={{textDecoration: 'none'}}>
          <Button
          text align= "right"
          gutterBottom
            variant="contained"
            color="success"
            sx={{ width: '180px', fontSize: '16px' }}
          >
            Sign up now!
          </Button>
          </Link>
    </Container>
  );
};
