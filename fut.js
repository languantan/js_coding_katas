export function mergeIntervals(intervals) {
  let mergedIntervals = [];
  let tracking = {};

  for (const value of intervals) {
    if (mergedIntervals.length === 0){
      mergedIntervals.push(value);
      tracking[value[0]] = value[1];
      continue;
    }

    let merged = false;
    for (const m_value of mergedIntervals) {
      if (value[0] > m_value[0] && value[1] > m_value[1]) {
        m_value[1] = value[1];
        merged = true;
      }
    }

    if (!merged) {
      mergedIntervals.push(value);
    }
  }

  return mergedIntervals;
}