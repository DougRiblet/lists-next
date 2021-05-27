import prisma from '../db/prisma';

function Year({ yearList }) {
  return (
    <div className="container">
      <ul>
        {yearList.map(({ date, Venue }) => (
          <li>
            {date}
            {' '}
            |
            {' '}
            {Venue.site}
            {Venue.school ? ` - ${Venue.school}` : ''}
            {' '}
            |
            {Venue.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

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

  res.sort((a, b) => a.date - b.date);

  return { props: { yearList: res } };
}

export default Year;
