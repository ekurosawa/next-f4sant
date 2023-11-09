import Header from '../../pageparts/Header';
import Main from '../../pageparts/Main';
import Sidebar from '../../pageparts/Sidebar';
import Footer from '../../pageparts/Footer';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import markdownToHtml from '../../lib/markdownToHtml';

import styles from '../../components/layout.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import Image from 'next/image';
import { Typography } from '@mui/material';


export async function getStaticProps({ params }) {
  // markdownToHtmlで
  const content = await markdownToHtml(Post.content || '')
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


const defaultTheme = createTheme();


export default function Post({ postData }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <link rel="icon" href="favi.ico" />

      <Header >
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Header>


          


      <Grid item xs={12}>
      <CardActionArea >
        <Card sx={{ display: 'flex' }}>
          <CardMedia
          center
            component="img"
            sx={{ width: 600, display: { xs: 'none', sm: 'block' } }}
            image={postData.thumbNa}
            alt="thumbna"
          />
        </Card>
      </CardActionArea>
    </Grid>


      <title>{postData.title}</title>

      <div className={styles.container}>
        
          <Typography variant="h3">{postData.title}</Typography>
            <Typography py={2}><Date dateString={postData.date} /></Typography>
            <Typography py={1}>{postData.writer}</Typography>


          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <Footer></Footer>
    </ThemeProvider>
  );
}

