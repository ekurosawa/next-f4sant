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
import CssBaseline from "@mui/material/CssBaseline";

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


const writerData = [
    {
        wart: '/images/itiroshirota.png',
        wname: '白田 一郎',
        intro: '管理'
    },
    {
        wart: '/images/nakazuba640.png',
        wname: '柿本 建',
        intro: `管理, エンジニア`
    },
    {
        wart: '/images/flowerncafe.png',
        wname: '英 世志香',
        intro: '事務, デザイナー'
    },
    {
        wart: '/images/hitoriTravel.png',
        wname: '乾 洋典',
        intro: '事務'
    },
    {
        wart: '/images/ekurosawa.png',
        wname: '黒澤 愛理',
        intro: '事務'
    },
];



const darkTheme = createTheme();

export default function writers() {

    return (
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <link rel="icon" href='/images/nakazuba40white.png' />

                <Header >
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Header>

                <Main></Main>

                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Container maxWidth="lg">
                            <Typography
                                component="h1"
                                variant="h4"
                                align="center"
                                color="text.primary"
                                gutterBottom
                                sx={{ color: "aliceblue" }}
                            >
                                Writers
                            </Typography >
                            <Grid
                                container spacing={4} // containe spacing : アイテム幅の調整
                            >

                                {writerData.map(({ wart, wname, intro }, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={4}>
                                        <Card
                                            className='card'
                                            py={3} sx={{ display: 'flex', flexDirection: 'column' }} >
                                            <CardContent sx={{ flex: '10 auto' }} >
                                                <Box display="flex">
                                                    <CardMedia
                                                        component="img"
                                                        sx={{ width: 151 }}
                                                        image={wart}
                                                        alt="writer art"
                                                    />
                                                    <Box px={2} color='inherit'>

                                                        <Typography color="black" fontFamily="sans-serif" fontWeight="Bold" >
                                                            {wname}
                                                        </Typography>

                                                        <Box display="flex" justifyContent="flex-start">
                                                            <Typography color="black" sx={{ whiteSpace: 'pre-line' }} fontSize={11} >
                                                                {intro}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>

                    </Grid>

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


