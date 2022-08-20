//React & MUI Imports
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, TextField, Avatar, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';



const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

export default function RecruiterProfile() {
    const data = [
        {
            _id: "1",
            firstName: "Richard",
            lastName: "Guarnieri",
            email: "richard@mail.com",
            phone: "5555",
            github: "richard",
            languages: [
                {
                    _id: "1",
                    language: "HTML"
                },
                {
                    _id: "2",
                    language: "JS"
                },
                {
                    _id: "3",
                    language: "CSS"
                },
                {
                    _id: "2",
                    language: "JS"
                }
            ],
            frameworks: [
                {
                    _id: "1",
                    framework: "React"
                },
                {
                    _id: "2",
                    framework: "Express"
                }
            ],
            platforms: [
                {
                    _id: "1",
                    platform: "Heroku"
                },
                {
                    _id: "2",
                    platform: "Github"
                }
            ],
            knowledge: [
                {
                    _id: "1",
                    knowledge: "MVS"
                },
                {
                    _id: "2",
                    knowledge: "Git"
                }
            ],
        },
        {
            _id: "2",
            firstName: "Kevin",
            lastName: "Ralo",
            email: "Kevin@mail.com",
            phone: "5555",
            github: "Kevin",
            languages: [
                {
                    _id: "1",
                    language: "HTML"
                },
                {
                    _id: "2",
                    language: "JS"
                }
            ],
            frameworks: [
                {
                    _id: "1",
                    framework: "React"
                },
                {
                    _id: "2",
                    framework: "Express"
                }
            ],
            platforms: [
                {
                    _id: "1",
                    platform: "Heroku"
                },
                {
                    _id: "2",
                    platform: "Github"
                }
            ],
            knowledge: [
                {
                    _id: "1",
                    knowledge: "MVS"
                },
                {
                    _id: "2",
                    knowledge: "Git"
                }
            ],
        },
        {
            _id: "3",
            firstName: "Daniel",
            lastName: "Lago",
            email: "daniel@mail.com",
            phone: "5555",
            github: "Daniel",
            languages: [
                {
                    _id: "1",
                    language: "HTML"
                },
                {
                    _id: "2",
                    language: "JS"
                }
            ],
            frameworks: [
                {
                    _id: "1",
                    framework: "React"
                },
                {
                    _id: "2",
                    framework: "Express"
                }
            ],
            platforms: [
                {
                    _id: "1",
                    platform: "Heroku"
                },
                {
                    _id: "2",
                    platform: "Github"
                }
            ],
            knowledge: [
                {
                    _id: "1",
                    knowledge: "MVS"
                },
                {
                    _id: "2",
                    knowledge: "Git"
                }
            ],
        }
    ]
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
                    <Autocomplete
                        multiple
                        id="size-small-standard-multi"
                        size="small"
                        options={knowledge}
                        getOptionLabel={(option) => option.title}
                        filterOptions={filterOptions}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="knowledge"
                                placeholder="Object-Oriented-Programming (OOP)"
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
                        {
                            data.map((dev) => {
                                return (
                                    <TableRow>
                                        <TableCell><Avatar sx={{ bgcolor: deepOrange[500] }}>{dev.firstName.charAt(0)}</Avatar></TableCell>
                                        <TableCell align="left">
                                            <p><strong>Name: </strong>{dev.firstName} {dev.lastName}</p>
                                            <p><strong>Languages: </strong>
                                                {dev.languages.map((value, index) => {
                                                    return ((index ? ', ' : '') + value.language)
                                                })}
                                            </p>
                                            <p><strong>Frameworks: </strong>
                                                {dev.frameworks.map((value, index) => {
                                                    return ((index ? ', ' : '') + value.framework)
                                                })}
                                            </p>
                                            <p><strong>Knowledge: </strong>
                                                {dev.knowledge.map((value, index) => {
                                                    return ((index ? ', ' : '') + value.knowledge)
                                                })}
                                            </p>
                                        </TableCell>
                                        <TableCell align="right"><Button variant="contained" href={'/highlight/' + dev._id}>Preview</Button></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

// options
const languajes = [
    { title: 'HTML' },
    { title: 'CSS' },
    { title: 'Javascript' },
    { title: 'TypeScript' },
    { title: 'My SQL' },
    { title: 'MongoDB' },
    { title: 'SASS' },
]
const frameworks = [
    { title: "React.js" },
    { title: "Bootstrap" },
    { title: "jQuery" },
    { title: "Express.js" },
    { title: "Sequelize.js" },
    { title: "Mongoose.js" },
    { title: "Inquirer" },
    { title: "Tailwind" },
    { title: "Jest" }
]

const platforms = [
    { title: "Heroku" },
    { title: "GitHub" },
    { title: "GitLab" },
    { title: "StackOverFlow" },
    { title: "VSCode" },
    { title: "Postman" }
]
const knowledge = [
    { title: "MVS" },
    { title: "Object-Oriented-Programming (OOP)" },
    { title: "Application Programming Interfaces (API)" },
    { title: "TDD" },
    { title: "Progressive Web Applications (PWA)" },
    { title: "Git" },
    { title: "Visual Studio Code" }
]



