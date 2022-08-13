import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TemplateForm() {
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

    </Box>
  );
}
