import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, TextField, Avatar, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

//Component imports
import NavRecruit from './navRecruit';


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

export default function RecruiterProfile() {
    return (
        <Container>
            <NavRecruit />
            <br/>
            <br/>
            <br/>
            <Stack className='recruiter-filter-container' spacing={2} sx={{ width: 500 }}>
                <div className='container'>
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
                </div>
            </Stack>
            <TableContainer >
                <Table >
                    <TableHead className='table-head'>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></TableCell>
                            <TableCell align="left">
                                <p><strong>Name:</strong>dev name</p>
                                <p><strong>Languages:</strong>PHP, JS, HTML</p>
                                <p><strong>Experience:</strong>+3 years</p>
                            </TableCell>
                            <TableCell align="right"><Button variant="contained">Preview</Button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></TableCell>
                            <TableCell align="left">
                                <p><strong>Name:</strong>dev name</p>
                                <p><strong>Languages:</strong>PHP, JS, HTML</p>
                                <p><strong>Experience:</strong>+3 years</p>
                            </TableCell>
                            <TableCell align="right"><Button variant="contained">Preview</Button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></TableCell>
                            <TableCell align="left">
                                <p><strong>Name:</strong>dev name</p>
                                <p><strong>Languages:</strong>PHP, JS, HTML</p>
                                <p><strong>Experience:</strong>+3 years</p>
                            </TableCell>
                            <TableCell align="right"><Button variant="contained">Preview</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

// options
const languajes = [
    { title: 'Javascript' },
    { title: 'Python' },
    { title: 'Java' },
    { title: 'PHP' },
    { title: 'C#' },
    { title: 'C++' },
    { title: 'Typescript' },
]

const frameworks = [
    { title: "React" },
    { title: "Angular" },
    { title: "Express" },
    { title: "jQuery" },
    { title: "Node.js" }
]

const platforms = [
    { title: "Github" },
    { title: "VSCode" },
    { title: "Postman" },
]

