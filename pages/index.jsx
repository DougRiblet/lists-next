import Link from 'next/link';

const yrs = [...Array(28).keys()].map((i) => String(i + 68));

function HomePage() {
  return (
    <div className="home-years">
      <ul>
        {yrs.map((yr) => (
          <li>
            <Link href={`/${yr}`}>
              <a>{yr}</a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default HomePage;
