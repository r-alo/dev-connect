import { Grid, Container, Avatar, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

function FreelanceProfile() {
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid className='avatar' xs={4}><Avatar sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}>N</Avatar></Grid>
                <Grid xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                hola
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FreelanceProfile;