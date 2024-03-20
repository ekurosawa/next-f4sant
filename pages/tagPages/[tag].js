import Date from '../../components/date';
import Header from '../../pageparts/Header';
import Layout, { siteTitle } from '../../components/layout';
import Link from 'next/link';
import { getAllTags } from '../../lib/posts';


export default function Tag({ postData, tag }) {
    return (
      <Layout home>
        <Header>
          <title>Tag: {tag}</title>
        </Header>
  
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>Tag: {tag}</h2>
  
          <ul class="posts">
            {postData.map(({ id, date, title }) => (
              <li class="post_item" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small class="post_date">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
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
    const postData = allPosts.filter( (data) => data.tags.includes(tag) );
  
    return {
      props: {
        postData,
        tag,
      },
    };
  }