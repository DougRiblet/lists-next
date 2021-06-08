const numberToMonth = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

function formatShowHead(date, site, school, city) {
  const year = `19${date.slice(0, 2)}`;
  const month = numberToMonth[date.slice(2, 4)];
  const day = date.slice(4, 6);

  return (
    <div className="show-head">
      <div className="show-date">
        <p>
          {month} {day}, {year}
        </p>
      </div>
      <div className="show-place">
        <p>
          {site}
        </p>
        {school && (
          <p>
            {school}
          </p>
        )}
      </div>
      <div className="show-city">
        <p>
          {city}
        </p>
      </div>
    </div>
  );
}

export default formatShowHead;
