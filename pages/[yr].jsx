import { getStaticProps, getStaticPaths } from 'next';
import prisma from '../db/prisma';

function Year({ yearList }) {
  return (
    <div>
      <ul>
        {yearList.map(({ date, venue }) => (
          <li>{date} | {venue.site}{venue.school ? ` - ${venue.school}` : ""} | {venue.city}</li>
        ))}
      </ul>
    </div>
  );
}

export function getStaticPaths() {
  // Define range of years to show 
  const yrs = [...Array(25).keys()].map(i => i + 71);

  const paths = yrs.map((yr) => ({
    params: { id: yr },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {

  const res = await prisma.show.findMany({
    where: {
      date: {
        startsWith: args.year,
      },
    },
    select: {
      date: true,
      venue: {
        select: {
          city: true,
          site: true,
          school: true,
        },
      },
    },
  });
  const yearList = await res.json();

  return { props: { yearList } };
};
