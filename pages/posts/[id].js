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
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

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
      <Container fixed style={{ maxWidth: "800px", backgroundColor: "aliceblue", minHeight: "100vh" }}>

        <Header></Header>

        <title>{postData.title}</title>
        <Box sx={{ backgroundColor: "aliceblue" }}>
          <Card>
            <CardMedia
              component="img"
              image={postData.thumbNa}
              alt="thumbna"
              height={270}
            />
          </Card>
          <Typography py={1} variant="h4">
            {postData.title}
            </Typography>
          <Box justifyContent="space-between" display="flex" py={1} >
            <Typography 
            sx={{ fontSize: 20 }} fontStyle="bold" color="text.secondary" gutterBottom>
              {postData.tug}
            </Typography>
            <Typography 
            sx={{ fontSize: 16, fontWeight: "bold" }} color="text.secondary" >
              {postData.date}
            </Typography>
          </Box>
          <Divider />
          <Typography py={1} sx={{ fontSize: 16, textAlign: "right" }} color="text.secondary" >
            {postData.writer}
          </Typography>

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Box>
      </Container>

      <Footer></Footer>
    </ThemeProvider>
  );
}

