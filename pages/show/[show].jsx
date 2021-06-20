import PropTypes from 'prop-types';
import Head from 'next/head';
import prisma from '../../db/prisma';
import handleSetList from '../../utils/handleSetList';
import formatSets from '../../utils/formatSets';
import formatShowHead from '../../utils/formatShowHead';
import getArchiveLinks from '../../utils/getArchiveLinks';
import formatArchive from '../../utils/formatArchive';
import Layout from '../../components/layout';

function Show({
  date, site, city, school, layout, archtop, archlinks, sets,
}) {
  return (
    <Layout>
      <Head>
        <title>
          Grateful Dead setlist {date} in {city}
        </title>
        <meta
          name="description"
          content={`DeadQL | Grateful Dead setlist ${date} in ${city}`}
        />
        <meta
          property="og:title"
          content={`Grateful Dead setlist ${date} in ${city}`}
          key="title"
        />
      </Head>
      <div className="container">
        {formatShowHead(date, site, school, city)}
        {formatSets(layout, sets)}
        {formatArchive(archlinks, archtop, date)}
      </div>
    </Layout>
  );
}

Show.propTypes = {
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  archtop: PropTypes.string.isRequired,
  archlinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  /* eslint-disable-next-line react/forbid-prop-types */
  sets: PropTypes.object.isRequired,
};

export async function getStaticPaths() {
  const showdates = await prisma.show.findMany({
    where: {
      date: {
        gt: '660000',
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

  const archlinks = await getArchiveLinks(res.date);

  const setsObj = handleSetList(res.Track);

  const props = {
    date: res.date,
    site: res.Venue.site,
    school: res.Venue.school || '',
    city: res.Venue.city,
    layout: res.shape,
    archtop: res.archtop || '',
    sets: setsObj,
    archlinks: archlinks || [],
  };

  return { props };
}

export default Show;
