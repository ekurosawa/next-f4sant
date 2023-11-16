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
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';

import Header from '../pageparts/Header';
import Main from '../pageparts/Main';
import Sidebar from '../pageparts/Sidebar';
import Footer from '../pageparts/Footer';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const posts = ['   '];

const sections = [
  
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const sidebar = {
  title: 'hororo',
  description:
    'kekekekekekekekekekekekekekekekekekekekkekekekekekekkekekekekekekekke',
  archives: [
    { title: 'Nov 2023', url: '#' },
    { title: 'Oct 2023', url: '#' },

  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
  ],
};

const defaultTheme = createTheme();

export default function Home({ allPostsData }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container style={{ backgroundColor: "#3d3d3d"}}>
      <link rel="icon" href='/images/nakazuba40white.png' />

      <Header ></Header>

      <Main></Main>
        {/*<MainFeaturedPost post={mainFeaturedPost} />*/}
        {/*<Grid container spacing={5} sx={{ mt: 3}}>
          {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>*/}
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Container>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="inherit">
              Articles
            </Typography>
            <Grid
              container spacing={4}
            >

              {allPostsData.map(({ id, date, title, writer, thumbNa }, card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    style={{ color: "aliceblue" }}
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image={thumbNa}
                      alt="image"
                      href={`/posts/${id}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box justifyContent="space-between" display="flex">
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {date}
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" >
                          {writer}
                        </Typography>
                      </Box>
                        {/*be{bull}nev{bull}o{bull}lent*/}
                        <Link 
                          style={{ color: "#333333" }}
                          href={`/posts/${id}`} color="inherit">
                          {title}
                        </Link>
                        <br />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>


          </Container>

        </Grid>

      <Sidebar
        title={sidebar.title}
        description={sidebar.description}
        archives={sidebar.archives}
        social={sidebar.social}
      />


      <Footer>      </Footer>
      
      </Container>
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


