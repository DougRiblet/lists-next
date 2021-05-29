import PropTypes from 'prop-types';
import prisma from '../../db/prisma';
import handleSetList from '../../utils/handleSetList';
import formatSets from '../../utils/formatSets';

function Show({
  date, site, city, school, layout, sets,
}) {
  return (
    <div className="container">
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
    </div>
  );
}

Show.propTypes = {
  date: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
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
    sets: setsObj,
  };

  return { props };
}

export default Show;
