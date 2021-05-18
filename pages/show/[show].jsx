import prisma from '../../db/prisma';
import handleSetList from '../../utils/handleSetList';
import formatSets from '../../utils/formatSets';

function Show({
  date, site, city, school, layout, sets,
}) {
  return (
    <div className="container">
      <p>{date}</p>
      <p>
        {site}
        {school ? ` - ${school}` : ''}
      </p>
      <p>{city}</p>
      <hr />
      {formatSets(layout, sets)}
    </div>
  );
}

export async function getStaticPaths() {
  const showdates = await prisma.show.findMany({
    where: {
      date: {
        gt: '710000',
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
      layout: true,
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
    school: res.Venue.school,
    city: res.Venue.city,
    layout: res.layout,
    sets: setsObj,
  };

  return { props };
}

export default Show;
