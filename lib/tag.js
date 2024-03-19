export default function Tag({ allTags }) {
  return (
    <Layout home>
      <Head>
        <title>タグ一覧</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>タグ一覧</h2>

        <ul class="tags">
          {allTags.map((tag) => (
            <li class="tag_item" key={tag}>
              <Link href={`/tag/${encodeURIComponent(tag)}`}>
                <a>{tag}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Add the "await" keyword like this:
  const allTags = getAllTags();
  return {
    props: {
      allTags,
    },
  };
}