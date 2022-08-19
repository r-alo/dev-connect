//React & MUI Imports
import React from 'react';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
      <Container className="containter-home">
        <Typography variant="h2" gutterBottom>Start to Dev-connect!</Typography>
          <Typography variant="h5" gutterBottom>
            Welcome to the best professional network where you can find the best developers 
            and the most renewed companies from all around the world.
            </Typography>

            <Link to="/signup" 
            style={{textDecoration: 'none'}}>
          <Button className='buttons' variant="contained">
            Sign up now!
          </Button>
          </Link>

            <div className="create-profile">Create your profile as:</div>

            <div>
              <div><p>Recruiter: where you can search for candidates that meet your specific needs.</p></div>
              <div><p>Freelancer: where you can show your skills and your extensive knowledge. Additionally, you can connect with 
            recruiters that match your abilities.</p></div>
            </div>
    </Container>
  );
};
