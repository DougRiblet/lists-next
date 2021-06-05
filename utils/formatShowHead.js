const numberToMonth = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export function formatShowHead(date, site, school, city) {
  const year = `19${date.slice(0, 2)}`;
  const month = numberToMonth[date.slice(2, 4)];
  const day = date.slice(4, 6);
  let extra;
  if (date.length === 7) { extra = date.slice(6, 7)}

  return (
    <div className="show-head">
      <div className="show-date">
        {year}
        <br />
        {month}
        {' '}
        {day}
      </div>
      <div className="show-place">
        {site}
        <br />
        {school && (
          <span>
            {school}
            <br />
          </span>
        )}
        {city}
      </div>
      <div className="show-extra">
        {extra && (
          <h1>{extra}</h1>
        )}
      </div>
    </div>
  );
}

export default formatShowHead;
