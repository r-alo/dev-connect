//React & MUI Imports
import { Grid, Container, Avatar, Card, CardContent, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, ImageList, ImageListItem, ListSubheader, ImageListItemBar, IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

// Apollo Client
import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';


function FreelanceProfile() {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Calorie Counter',
            author: '@bkristastucchio',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'FoodRand',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
            cols: 2,
        },
    ];

    // Get data from GraphQL
    const { loading, error, data } = useQuery(ME);
    if (loading) return (<></>);
    if (error) return (<h1>{error.message}</h1>)
    console.log(data);

    return (
        <Container className='container-profile'>
            <Grid className='grid-profile' container spacing={1}>
                <Grid xs={4}><Avatar sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}>N</Avatar></Grid>
                <Grid xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <h1>{data.me.firstName}'s Profile</h1>
                            <p><strong>Name: </strong>{data.me.firstName} {data.me.lastName}</p>
                            <p><strong>Mail: </strong>{data.me.email}</p>
                            <p><strong>Phone: </strong>{data.me.phone}</p>
                            <p><strong>Github: </strong>{data.me.github}</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <TableContainer className='recruiter-table'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Languages</TableCell>
                            <TableCell align="center">Frameworks</TableCell>
                            <TableCell align="center">Platforms</TableCell>
                            <TableCell align="center">Knowledge</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align='center'>
                                {data.me.languages && (
                                    data.me.languages.map((value) => {
                                        return (<p key={value._id}>{value.language}</p>);
                                    })
                                )}
                                
                            </TableCell>
                            <TableCell align='center'>
                                {data.me.frameworks && (
                                    data.me.frameworks.map((value) => {
                                        return (<p key={value._id}>{value.framework}</p>);
                                    })
                                )}
                            </TableCell>
                            <TableCell align='center'>
                                {data.me.platforms && (
                                    data.me.platforms.map((value) => {
                                        return (<p key={value._id}>{value.platform}</p>);
                                    })
                                )}
                            </TableCell>
                            <TableCell align='center'>
                                {data.me.knowledge && (
                                    data.me.knowledge.map((value, i) => {
                                        return <p>{value.knowledge}</p>
                                    })
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <ImageList >
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">Projects</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}

export default FreelanceProfile;