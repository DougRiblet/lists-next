import Link from 'next/link';
import Head from 'next/head';
import PropTypes from 'prop-types';
import prisma from '../db/prisma';

function Year({ yearList, year }) {
  return (
    <div className="container">
      <Head>
        <title>
          Grateful Dead {year} concert list
        </title>
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content={`Grateful Dead ${year} concert list`}
          key="title"
        />
      </Head>
      <ul>
        {yearList.map(({
          date, city, site, school,
        }) => (
          <li key={date}>
            <Link href={`/show/${date}`}>
              <a>
                {date}
                {' '}
                |
                {' '}
                {site}
                {school ? ` - ${school}` : ''}
                {' '}
                |
                {' '}
                {city}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Year.propTypes = {
  yearList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      site: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  ).isRequired,
  year: PropTypes.string.isRequired,
};

export async function getStaticPaths() {
  // Define range of years to show
  const yrs = [...Array(28).keys()].map((i) => String(i + 68));
  const paths = yrs.map((yr) => ({
    params: { yr },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await prisma.show.findMany({
    where: {
      date: {
        startsWith: params.yr,
      },
    },
    select: {
      date: true,
      Venue: {
        select: {
          city: true,
          site: true,
          school: true,
        },
      },
    },
  });

  // res.sort((a, b) => a.date - b.date);
  res.sort((a, b) => {
    if (a.date.slice(0, 6) > b.date.slice(0, 6)) { return 1; }
    if (a.date.slice(0, 6) < b.date.slice(0, 6)) { return -1; }
    if (a.date.slice(6) > b.date.slice(6)) { return 1; }
    if (a.date.slice(6) < b.date.slice(6)) { return -1; }
    return 0;
  });

  const yearList = res.map((obj) => ({
    date: obj.date,
    city: obj.Venue.city,
    site: obj.Venue.site,
    school: obj.Venue.school || '',
  }));

  return { props: { yearList, year: `19${params.yr}` } };
}

export default Year;
