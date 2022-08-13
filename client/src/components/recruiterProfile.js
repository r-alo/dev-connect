import Stack from '@mui/material/Stack';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

export default function RecruiterProfile() {
  return (
    <Stack spacing={2} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="size-small-standard-multi"
        size="small"
        options={languajes}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Languages"
            placeholder="Javascript"
          />
        )}
      />
      <Autocomplete
        multiple
        id="size-small-standard-multi"
        size="small"
        options={frameworks}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Frameworks"
            placeholder="React"
          />
        )}
      />
      <Autocomplete
        multiple
        id="size-small-standard-multi"
        size="small"
        options={platforms}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Platforms"
            placeholder="Github"
          />
        )}
      />
    </Stack>
  );
}

// options
const languajes = [
    { title: 'Javascript'},
    { title: 'Python'},
    { title: 'Java'},
    { title: 'PHP'},
    { title: 'C#'},
    { title: 'C++'},
    { title: 'Typescript'},
]

const frameworks = [
    { title: "React"},
    { title: "Angular"},
    { title: "Express"},
    { title: "jQuery"},
    { title: "Node.js"}
]

const platforms = [
    { title: "Github"},
    { title: "VSCode"},
    { title: "Postman"},
]

