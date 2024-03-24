import { getAllTags, getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout";
import Link from "next/link";
import Head from "next/head";
import Date from "../../components/date";

import { Card, Grid } from "@mui/material";

export default function Tag({ postData, tag }) {
  return (
    <Layout home>
      <Head>
        <title>Tag: {tag}</title>
      </Head>

        <h2>Tag: {tag}</h2>

          {postData.map(({ id, date, title }, card) => (
            <Grid key={card}>
            <Card class="post_item" >
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
                {date}
            </Card>
            </Grid>
          ))}
    </Layout>
  )
}

export async function getStaticPaths() {
  const tags = getAllTags();
  const paths = tags.map((tag) => {
    return {
      params: {
        tag: tag,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = params.tag;
  const allPosts = getSortedPostsData();
  const postData = allPosts.filter( (data) => data.tag.includes(tag) );

  return {
    props: {
      postData,
      tag,
    },
  };
}