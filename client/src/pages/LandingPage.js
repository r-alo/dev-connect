//React & MUI Imports
import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
      <Container>
      <div className="body">
        <div className="container-home">
        Start to Dev-connect!
          <p>Welcome to the best professional network where you can find the best developers 
            and the most renewed companies from all around the world.
            </p>

            <Link to="/signup" 
            style={{textDecoration: 'none'}}>
          <Button className='buttons' variant="contained">
            Sign up now!
          </Button>
          </Link>
        </div>

        <div className="create-profile">
          Create your profile as:
              <p>Recruiter: where you can search for candidates that meet your specific needs.</p>
              <p>Freelancer: where you can show your skills and your extensive knowledge. Additionally, you can connect with 
            recruiters that match your abilities.</p>
        </div>
        </div>
        </Container>
  );
};
