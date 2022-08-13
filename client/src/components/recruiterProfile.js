import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, TextField} from '@mui/material';


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

export default function RecruiterProfile() {
    return (
        <Container>
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
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='table-head'>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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

