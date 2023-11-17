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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home({ allPostsData }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      <Container fixed style={{ backgroundColor: "aliceblue", marginBottom: "0" }}>
        <link rel="icon" href='/images/nakazuba40white.png' />

        <Header></Header>

        <Main></Main>
        {/*<MainFeaturedPost post={mainFeaturedPost} />*/}
        {/*<Grid container spacing={5} sx={{ mt: 3}}>
          {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>*/}
        <Grid container spacing={5} sx={{ mt: 2  }}>
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{ color: "#1a1a1a", mb: 1 }}

            >
              Articles
            </Typography>
            <Grid
              container spacing={4}
            >
              {allPostsData.map(({ id, date, title, writer, thumbNa }, card, index) => (
                <Grid item key={card} xs={12} sm={12} md={4}>
                  <CardActionArea component="a" href={`/posts/${id}`}>
                  <Card
                    style={{ backgroundColor: "#ffeeff" }}
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                        backgroundColor: "#FFFFFF"
                      }}
                      image={thumbNa}
                      alt="image"
                      href={`/posts/${id}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box justifyContent="space-between" display="flex">
                        <Typography sx={{ fontSize: 14, color: "#1a1a1a", textDecoration: 'none' }} color="text.secondary" gutterBottom>
                          {date}
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: "#1a1a1a", textDecoration: 'none' }} color="text.secondary" >
                          {writer}
                        </Typography>
                      </Box>
                      {/*be{bull}nev{bull}o{bull}lent*/}
                      <Link
                        style={{ color: "#1a1a1a", textDecoration: 'none' }}
                        href={`/posts/${id}`} color="inherit">
                        {title}
                      </Link>
                    </CardContent>
                  </Card>
                  </CardActionArea>
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
      </Container>

      <Footer></Footer>

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


