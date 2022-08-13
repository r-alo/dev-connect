import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";



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

  const { html, css, javascript } = state;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
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

      <FormControl sx={ { m: 3 } } component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={ html } onChange={ handleChange } name="html" />
            }
            label="HTML"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ css } onChange={ handleChange } name="css" />
            }
            label="CSS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ javascript }
                onChange={ handleChange }
                name="javascript"
              />
            }
            label="JavaScript"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
