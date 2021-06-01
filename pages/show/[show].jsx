import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import prisma from '../../db/prisma';
import handleSetList from '../../utils/handleSetList';
import formatSets from '../../utils/formatSets';

function Show({
  date, site, city, school, layout, archtop, sets,
}) {
  return (
    <div className="container">
      <Head>
        <title>
          Grateful Dead set list | {date} | {city}
        </title>
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content={`Grateful Dead set list | ${date} | ${city}`}
          key="title"
        />
      </Head>
      <div className="showhead">
        <div className="showdate">
          {date}
        </div>
        <div className="showvenue">
          {site}
          {school ? ` - ${school}` : ''}
        </div>
        <div className="showcity">
          {city}
        </div>
      </div>
      {formatSets(layout, sets)}
      <div className="archive">
        <div className="allcopies">
          <Link
            href={`https://archive.org/details/GratefulDead?and[]=date:19${date.slice(0, 2)}-${date.slice(2, 4)}-${date.slice(4, 6)}`}
          >
            <a
              aria-label="Check all copies of this show on the Archive"
            >
              Check all copies of this show on the Archive
            </a>
          </Link>
        </div>
        <div className="playlist">
          {archtop && archtop.length > 1
            && (
            <iframe
              src={`https://archive.org/embed/${archtop}&playlist=1&list_height=114`}
              width="500"
              height="300"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              title={`Grateful Dead concert 19${date.slice(0, 2)}-${date.slice(3, 4)}-${date.slice(5, 6)}`}
            />
            )}
        </div>
      </div>
    </div>
  );
}

Show.propTypes = {
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  archtop: PropTypes.string.isRequired,
  /* eslint-disable-next-line react/forbid-prop-types */
  sets: PropTypes.object.isRequired,
};

export async function getStaticPaths() {
  const showdates = await prisma.show.findMany({
    where: {
      date: {
        gt: '680000',
      },
    },
    select: {
      date: true,
    },
  });

  const paths = showdates.map((showdate) => ({
    params: { show: showdate.date },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await prisma.show.findUnique({
    where: {
      date: params.show,
    },
    select: {
      date: true,
      shape: true,
      archtop: true,
      Venue: {
        select: {
          city: true,
          site: true,
          school: true,
        },
      },
      Track: {
        select: {
          songTitle: true,
          position: true,
          arrow: true,
          reprise: true,
        },
      },
    },
  });

  const setsObj = handleSetList(res.Track);

  const props = {
    date: res.date,
    site: res.Venue.site,
    school: res.Venue.school || '',
    city: res.Venue.city,
    layout: res.shape,
    archtop: res.archtop || '',
    sets: setsObj,
  };

  return { props };
}

export default Show;
