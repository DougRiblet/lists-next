import prisma from '../../db/prisma';

function Show({ show }) {
  return (
    <div className="container">
      <p>{show.date}</p>
      <p>{show.Venue.site}{show.Venue.school ? ` - ${show.Venue.school}` : ""}</p>
      <p>{show.Venue.city}</p>
      <hr />
      <ul>
        {show.Track.map((track) => {
          return <li key={track.position}>
            {track.position} {track.songTitle} {track.arrow ? ">" : ""}
          </li>
        })}
      </ul>
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
    }
  });

  const paths = showdates.map((showdate) => ({
    params: { show: showdate.date },
  }));

  return { paths, fallback: false };
};

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

  res.Track.sort((a, b) => {
    let comparison = 0;
    if (a.position > b.position) { comparison = 1 }
    else if (a.position < b.position) { comparison = -1 }
    return comparison;
  });

  return { props: { show: res } };
};

export default Show;
