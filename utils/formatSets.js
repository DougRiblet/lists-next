function formatSets(layout, sets) {
  const encorePlayed = sets.e && sets.e.length > 0;
  if (layout === 'S1_S2') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'S1') {
    return (
      <div className="container-sets">
        <div className="setcol">
          <ul>
            {sets['1'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    )
  }

  if (layout === 'S1_S2_S3' || layout === 'BD_S1_S2') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <ul>
            {sets['3'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'UNK') {
    return (
      <div className="container-sets">
        <div className="setcol">
          <p className="unknown">
            Set list unknown
          </p>
        </div>
      </div>
    )
  }

  if (layout === 'S1_DY') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    )
  }

  if (layout === 'S1_S2_DY') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <ul>
            {sets['y'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    )
  }

  if (layout === 'JB_S1') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'S1_JB_S2') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['z'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'JB_S1_S2_S3') {
    return (
      <div className="container-sets">
        <div className="setcol">
          <ul>
            {sets['z'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          <ul className="encore-list">
            {sets['3'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (layout === 'AC_S1_S2') {
    return (
      <div className="container-sets">
        <div className="setcol">
          <ul>
            {sets['a'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'S1_PN_S2') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['n'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'S1_PN_S2_S3') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['n'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          <ul style={{ marginTop: "30px" }}>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <ul>
            {sets['3'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'S1_S2_PN_S3') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          <ul style={{ marginTop: "30px" }}>
            {sets['n'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <ul>
            {sets['3'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'S1_PNS2') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  if (layout === 'S1_PNS2_S3') {
    return (
      <div className="container-sets">
        <div className="setcol">
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
          <ul>
            {sets['2'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className="setcol">
          <ul>
            {sets['3'].map((track) => (
              <li>
                {track.songTitle}
                {track.arrow ? ' >' : ''}
              </li>
            ))}
          </ul>
          {encorePlayed
            && (
              <ul className="encore-list">
                {sets.e.map((track) => (
                  <li>
                    {track.songTitle}
                    {track.arrow ? ' >' : ''}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    );
  }

  return <div className="container-sets">placeholder</div>;
}

export default formatSets;
