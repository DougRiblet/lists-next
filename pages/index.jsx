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
          name="description"
          content="DeadQL | Grateful Dead set lists"
        />
        <meta
          property="og:title"
          content="DeadQL | Grateful Dead set lists"
          key="title"
        />
      </Head>
      <div className="container-home">
        <div className="home-years">
          <ul>
            {yrs.map((yr) => (
              <li key={yr}>
                <Link href={`/${yr}.html`}>
                  <a>{yr}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h1>
          DeadQL
          <span className="subhead">
            Grateful Dead set lists database
          </span>
        </h1>
      </div>
    </Layout>
  );
}

export default HomePage;
