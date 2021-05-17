function comparePosition(a, b) {
  let comparison = 0;
  if (a.position > b.position) { comparison = 1 }
  else if (a.position < b.position) { comparison = -1 }
  return comparison;
};

function sugarToSunshine(obj) {
  if (obj.songTitle === "Sugar Magnolia" && obj.reprise) {
    obj.songTitle = "Sunshine Daydream";
  }
  return obj;
};

function divideSets(acc, cur) {
  const prefix = cur.position.slice(0,1);
  if (acc[prefix]) {
    acc[prefix].push(cur);
  } else {
    acc[prefix] = [cur];
  }
  return acc;
};

export default function handleSetList(tracksArr) {
  const sets = tracksArr
                .map(sugarToSunshine)
                .sort(comparePosition)
                .reduce(divideSets, {});

  return sets;
};

