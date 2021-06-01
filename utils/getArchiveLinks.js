import axios from 'axios';

export function getArchiveLinks(date) {
  const u1 = 'https://archive.org/services/search/v1/scrape';
  const u2 = '?fields=source,subject';
  const u3 = '&q=collection%3Agratefuldead AND date%3A';
  const u4 = `19${date.slice(0,2)}-${date.slice(2,4)}-${date.slice(4,6)}`;
  
  axios.get(`${u1}${u2}${u3}${u4}`)

}