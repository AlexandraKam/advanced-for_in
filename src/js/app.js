export default function orderByProps(obj, sort) {
  const res = [];
  const objRes = [];
  sort.forEach((element) => {
    res.push({ key: element, value: obj[element] });
  });
  /* eslint-disable-next-line */
  for (const prop in obj) {
    objRes.push({ key: prop, value: obj[prop] });
  }
  objRes.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  objRes.forEach((elem) => {
    if (res.findIndex((element) => element.key === elem.key) === -1) {
      res.push(elem);
    }
  });
  return res;
}
