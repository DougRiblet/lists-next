import Link from 'next/link';

function formatArchive(archlinks, archtop, date) {
  return (
    <div className="archive">
      <div className="allcopies">
        <ul>
          {archlinks.length && archlinks.map((str) => (
            <li key={str}>
              <Link href={`https://archive.org/details/${str}`}>
                <a>{str}</a>
              </Link>
            </li>
          ))}
        </ul>
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
  );
}

export default formatArchive;
