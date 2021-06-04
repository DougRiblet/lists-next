import Link from 'next/link';
import Head from 'next/head';
import yrs from '../utils/defineYears';
import Layout from '../components/layout';

function HomePage() {
  return (
    <Layout home>
      <Head>
        <title>
          DeadQL | Grateful Dead set lists
        </title>
        <meta
          property="og:title"
          content="DeadQL | Grateful Dead set lists"
          key="title"
        />
      </Head>
      <div className="list-container">
        <div className="home-years">
          <ul>
            {yrs.map((yr) => (
              <li key={yr}>
                <Link href={`/${yr}`}>
                  <a>{yr}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="home-dql">
          <h1>DeadQL</h1>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
