export default function mergeIntervals(intervals) {
  let mergedIntervals = [];
  let tracking = {};

  for (const value of intervals) {
    if (mergedIntervals.length === 0){
      mergedIntervals.push(value);
      tracking[value[0]] = value[1];
      continue;
    }

    let merged = false;
    for (const [index, m_value] of mergedIntervals.entries()) {
      if (value[0] > m_value[0] && value[0] < m_value[1] && value[1] > m_value[1]) {
        m_value[1] = value[1];
        merged = true;
      } else if (value[0] < m_value[0] && value[1] > m_value[1]) {
        mergedIntervals[index] = value;
        merged = true;
      }
    }

    if (!merged) {
      mergedIntervals.push(value);
    }
  }

  return mergedIntervals;
}