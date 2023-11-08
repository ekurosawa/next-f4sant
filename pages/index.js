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

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const posts = ['   '];

const sections = [
  { title: 'Technology', url: '#' },
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
      <Header >
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Header>

      <main>
        {/*<MainFeaturedPost post={mainFeaturedPost} />*/}
        <Grid container spacing={4}>
          {/*{featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}*/}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>




        {/*Article以下の段落*/}




        {/*<ul className={utilStyles.list}>*/}

        <Container maxWidth="lg">
        <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Articles
            </Typography>
          <Grid
            container spacing={4}
          >

            {allPostsData.map(({ id, date, title, writer, thumbNa }, card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
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
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box justifyContent="space-between" display="flex">
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <small className={utilStyles.lightText}>
                          {date}
                        </small>
                      </Typography>
                      <Typography sx={{ fontSize: 12 }} color="text.secondary" >
                        <a></a>{writer}
                      </Typography>
                    </Box>
                    <Typography variant="h9" component="div">
                      {/*be{bull}nev{bull}o{bull}lent*/}
                      <Link href={`/posts/${id}`}>{title}</Link>
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {/*</ul>*/}
          </Grid>


        </Container>

      </Grid>
      </main>

      <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />


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


{/*<li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                            </small>
                        </li>*/}