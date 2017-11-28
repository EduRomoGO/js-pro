const currify = require('./currify.js');

const head = list => list[0];
const tail = list => list.slice(1);
const filter = currify((fn, list) => {
 if (list.length === 0) return list;
 if (fn(head(list))) return [head(list), ...filter(fn, tail(list))];
 return filter(fn, tail(list));
});

module.exports = filter;