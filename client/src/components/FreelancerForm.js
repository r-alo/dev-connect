import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container, Grid, Paper, Button } from '@mui/material';

export default function TemplateForm() {

  const [state, setState] = React.useState({
    html: false,
    css: false,
    javascript: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

const languages = ["HTML", "CSS", "Javascript", "TypeScript", "My SQL", "MongoDB", "SASS"];
const frameworks = ["React.js", "Bootstrap", "jQuery", "Express.js", "Sequelize.js", "Mongoose.js", "Inquirer", "Tailwind", "Jest"];
const platforms = ["Heroku", "GitHub", "GitLab", "Node.js", "StackOverFlow", "Postman"];
const additionalKn = ["MVS", "Object-Oriented-Programming (OOP)", "Application Programming Interfaces (API)", "TDD", "Progressive Web Applications (PWA)", "Git", "Visual Studio Code"];

//This is the form 
  const { html, css, javascript } = state;
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
            <Grid className='freelancer-form'>
                <h2>Profile Form</h2>
            </Grid>
            <div>
              <TextField
                required
                id=""
                label="Name"
                name="Freelance"
              />
              <TextField
                required
                id=""
                label="Surname"
                name="Freelance"
              />
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
              <TextField
                required
                id=""
                label="GitHub User Name"
                name="Freelance"
              />
              <TextField
                required
                id=""
                label="Phone Number"
                name="Freelance"
              />
            </div>

            <div>
            <Grid>
            <div>
            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard">
              <FormLabel component="legend">Languages</FormLabel>
              <FormGroup>
              {
              languages.map(item => (<FormControlLabel
                control={
                  <Checkbox defaultChecked={ false } onChange={ handleChange } name={item} />
                }
                label={item}
              />))
            }
                  
              </FormGroup>
            </FormControl>

            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard">
              <FormLabel component="legend">Libraries / Frameworks</FormLabel>
              <FormGroup>
              {
              frameworks.map(item => (<FormControlLabel
                control={
                  <Checkbox defaultChecked={ false } onChange={ handleChange } name={item} />
                }
                label={item}
              />))
            }
                  
              </FormGroup>
            </FormControl>

            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard">
              <FormLabel component="legend">Platforms</FormLabel>
              <FormGroup>
              {
              platforms.map(item => (<FormControlLabel
                control={
                  <Checkbox defaultChecked={ false } onChange={ handleChange } name={item} />
                }
                label={item}
              />))
            }
                  
              </FormGroup>
            </FormControl>
            

            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard">
              <FormLabel component="legend">Additional Knowledge</FormLabel>
              <FormGroup>
              {
              additionalKn.map(item => (<FormControlLabel
                control={
                  <Checkbox defaultChecked={ false } onChange={ handleChange } name={item} />
                }
                label={item}
              />))
            }
                  
              </FormGroup>

            </FormControl>
            </div>

            <div>
            <Button className='buttons' sx={ { m: 3 } } variant="contained"
              
                >
                  Sign Up
                </Button>
            </div>
            </Grid>
            </div>
            
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
}
