import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container, Grid, Paper, Button } from '@mui/material';

import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FREELANCER } from '../utils/mutations';
import Auth from '../utils/Auth';

export default function FreelancerForm() {

  const [freelancer, setFreelancer] = useState({});
  const [languages, setLanguages] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [knowledge, setKnowledge] = useState([]);

  const [addFreelancer, { loading, error, data }] = useMutation(ADD_FREELANCER);

  const handleChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setFreelancer({ ...freelancer, [name]: value });
    console.log(freelancer);
  };
  
  const handleChangeLanguages = (event) => {
    let array = languages;
    if (event.target.checked) {
      array.push({language: event.target.name});
      setLanguages(array)
    }
    if (!event.target.checked) {
      let newArray = array.filter(item => item.language !== event.target.name);
      setLanguages(newArray)
    }
  };

  const handleChangeFrameworks = (event) => {
    let array = frameworks;
    if (event.target.checked) {
      array.push({framework: event.target.name});
      setFrameworks(array)
    }
    if (!event.target.checked) {
      let newArray = array.filter(item => item.framework !== event.target.name);
      setFrameworks(newArray)
    }
  };

  const handleChangePlatforms = (event) => {
    let array = platforms;
    if (event.target.checked) {
      array.push({platform: event.target.name});
      setPlatforms(array)
    }
    if (!event.target.checked) {
      let newArray = array.filter(item => item.platform !== event.target.name);
      setPlatforms(newArray)
    }
  };

  const handleChangeKnowledge = (event) => {
    let array = knowledge;
    if (event.target.checked) {
      array.push({knowledge: event.target.name});
      setKnowledge(array)
    }
    if (!event.target.checked) {
      let newArray = array.filter(item => item.knowledge !== event.target.name);
      setKnowledge(newArray)
    }
  };

  const handleClick = async () => {
    try {
    let object = {...freelancer, languages, frameworks, platforms, knowledge}
    setFreelancer(object)
    console.log(freelancer)
    const { data } = await addFreelancer({
        variables: object,
    });
    Auth.loginFreelancer(data.addFreelancer.token);
    } catch (e) {
    console.error(e);
    }
  }

const languagesArr = ["HTML", "CSS", "Javascript", "TypeScript", "My SQL", "MongoDB", "SASS"];
const frameworksArr = ["React.js", "Bootstrap", "jQuery", "Express.js", "Sequelize.js", "Mongoose.js", "Inquirer", "Tailwind", "Jest"];
const platformsArr = ["Heroku", "GitHub", "GitLab", "Node.js", "StackOverFlow", "Postman"];
const additionalKnArr = ["MVS", "Object-Oriented-Programming (OOP)", "Application Programming Interfaces (API)", "TDD", "Progressive Web Applications (PWA)", "Git", "Visual Studio Code"];

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
              <TextField
                required
                id=""
                label="Email"
                name="email"
                onChange={handleChange}
              />
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
              <TextField
                required
                id=""
                label="GitHub User Name"
                name="github"
                onChange={handleChange}
              />
              <TextField
                required
                id=""
                label="Phone Number"
                name="phone"
                onChange={handleChange}
              />
              <TextField
                required
                id=""
                label="Company"
                name="company"
                onChange={handleChange}
              />
            </div>
            <div>
            <Grid>
            <div>
            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard" onChange={handleChangeLanguages}>
              <FormLabel component="legend">Languages</FormLabel>
              <FormGroup>
                {
                  languagesArr.map(item => (<FormControlLabel
                    control={
                      <Checkbox defaultChecked={ false } name={item} key={item} />
                    }
                    label={item}
                  />))
                }
              </FormGroup>
            </FormControl>

            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard" onChange={handleChangeFrameworks}>
              <FormLabel component="legend">Libraries / Frameworks</FormLabel>
              <FormGroup>
              {
                frameworksArr.map(item => (<FormControlLabel
                  control={
                    <Checkbox defaultChecked={ false } name={item} key={item} />
                  }
                  label={item}
                />))
              }  
              </FormGroup>
            </FormControl>

            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard" onChange={handleChangePlatforms}>
              <FormLabel component="legend">Platforms</FormLabel>
              <FormGroup>
                {
                platformsArr.map(item => (<FormControlLabel
                  control={
                    <Checkbox defaultChecked={ false } name={item} key={item} />
                  }
                  label={item}
                />))
                }  
              </FormGroup>
            </FormControl>
            

            <FormControl sx={ { m: 3 } } component="fieldset" variant="standard" onChange={handleChangeKnowledge}>
              <FormLabel component="legend">Additional Knowledge</FormLabel>
              <FormGroup>
                {
                additionalKnArr.map(item => (<FormControlLabel
                  control={
                    <Checkbox defaultChecked={ false } name={item} key={item} />
                  }
                  label={item}
                />))
                }
              </FormGroup>
            </FormControl>
            </div>

            <div>
            <Button className='buttons' sx={ { m: 3 } } variant="contained" onClick={handleClick}
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
