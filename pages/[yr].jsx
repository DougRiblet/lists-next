import Link from 'next/link';
import PropTypes from 'prop-types';
import prisma from '../db/prisma';

function Year({ yearList }) {
  return (
    <div className="container">
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
    if (a.date.slice(0,6) > b.date.slice(0,6)) { return 1 }
    if (a.date.slice(0,6) < b.date.slice(0,6)) { return -1 }
    if (a.date.slice(6) > b.date.slice(6)) { return 1 }
    if (a.date.slice(6) < b.date.slice(6)) { return -1 }
  });

  const yearList = res.map((obj) => ({
    date: obj.date,
    city: obj.Venue.city,
    site: obj.Venue.site,
    school: obj.Venue.school || '',
  }));

  return { props: { yearList } };
}

export default Year;
