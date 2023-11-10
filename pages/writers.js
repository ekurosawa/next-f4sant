import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Header from '../pageparts/Header';
import Main from '../pageparts/Main';
import Sidebar from '../pageparts/Sidebar';
import Footer from '../pageparts/Footer';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



const defaultTheme = createTheme();


export default function writers({ allPostsData }) {


    return (
        <ThemeProvider theme={defaultTheme}>
            <link rel="icon" href="/1104_illu.svg" />

            <Header >
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Header>

            <Main>
            </Main>

            <main>

                <Grid container py={2} spacing={5} sx={{ mt: 3 }}>

                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            writers
                        </Typography>
                        <Grid
                            container spacing={8} // containe spacing : アイテム幅の調整
                        >

                            {allPostsData.map(({ id, date, title, writer, thumbNa }, card, index) => (
                                <Grid item key={card} xs={12} sm={12} md={12}>
                                    <Card
                                        py={3} sx={{ height: '150%', display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Box display="flex">
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: 400, display: { xs: 'none', sm: 'block' } }}
                                                    image=""
                                                    alt="writer art"
                                                />
                                                <Box px={3} >
                                                    
                                                        <Link href="#" color='inherit' >"Writer introduction"</Link>
                                                    

                                                    <Typography sx={{ fontSize: 12 }} color="text.secondary" >

                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                </Grid>
            </main>

            <Footer>

            </Footer>
        </ThemeProvider>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                nakazuba
            </Link>{' '}
            {2023}
            {'.'}
        </Typography>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}



{/*<Typography variant="body2" color="text.secondary">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                  </Typography>*/}


