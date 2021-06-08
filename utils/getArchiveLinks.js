function buildArchiveURL(date) {
  const u1 = 'https://archive.org/services/search/v1/scrape';
  const u2 = '?fields=source,subject';
  const u3 = '&q=collection%3Agratefuldead%20AND%20date%3A';
  const u4 = `19${date.slice(0, 2)}-${date.slice(2, 4)}-${date.slice(4, 6)}`;

  return `${u1}${u2}${u3}${u4}`;
}

async function getArchiveLinks(date) {
  const archiveURL = buildArchiveURL(date);
  const response = await fetch(archiveURL, { method: 'POST' });
  const data = await response.json();
  return data.items.map((obj) => obj.identifier);
}

export default getArchiveLinks;
