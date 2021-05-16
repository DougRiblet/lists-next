import Head from 'next/head';
import { GetStaticProps, getStaticPaths } from 'next';
import prisma from '../db/prisma';



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
