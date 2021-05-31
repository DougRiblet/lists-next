import Link from 'next/link';
import Head from 'next/head';

const yrs = [...Array(28).keys()].map((i) => String(i + 68));

function HomePage() {
  return (
    <div className="home-years">
      <Head>
        <title>
          Grateful Dead set lists
        </title>
        <meta
          property="og:title"
          content="Grateful Dead set lists"
          key="title"
        />
        <meta charSet="UTF-8" />
      </Head>
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
  );
}

export default HomePage;
