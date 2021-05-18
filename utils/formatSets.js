function formatSets(layout, sets) {
  const encorePlayed = sets.e && sets.e.length > 0;
  if (layout === 'S1_S2') {
    return (
      <div className="container-sets">
        <div className="setcol">
          <p className="set-header">first set</p>
          <ul>
            {sets['1'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <p className="set-header">second set</p>
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        {encorePlayed
        && (
          <div className="setcol">
            <p className="set-header">encore</p>
            <ul>
              {sets.e.map((track) => (
                <li>
                  {track.songTitle}
                  {track.arrow ? ' >' : ''}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default formatSets;
