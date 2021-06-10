import Link from 'next/link';

function stripArchlinkText(str, date) {
  const regex = /^gd1?9?\d{2}-\d{2}-\d{2}\./;
  return str.replace(regex, '');
}

function formatArchive(archlinks, archtop, date) {
  return (
    <div className="archive">
      <div className="allcopies">
        <h2>
          Archive versions of {`19${date.slice(0, 2)}-${date.slice(2, 4)}-${date.slice(4, 6)}`}
        </h2>
        <ul>
          {archlinks.length && archlinks.map((str) => (
            <li key={str}>
              <Link href={`https://archive.org/details/${str}`}>
                <a>{stripArchlinkText(str, date)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="playlist">
        {archtop && archtop.length > 1
          && (
          <iframe
            src={`https://archive.org/embed/${archtop}&playlist=1&list_height=250`}
            width="500"
            height="300"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            title={`Grateful Dead concert 19${date.slice(0, 2)}-${date.slice(2, 4)}-${date.slice(4, 6)}`}
          />
          )}
      </div>
    </div>
  );
}

export default formatArchive;
