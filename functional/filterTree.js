const filter = require('./filter.js');
const odd = n => n % 2 === 1;
const tree = [[1, [2, 3]], 4, [5, [6, [7]]]];
console.log(filterTree(odd, tree));
// [[1,[3]],[5,[[7]]]]

const head = tree => tree[0];
const tail = tree => tree.slice(1);
function filterTree(fn, tree) {
    if (tree.length === 0) return tree;
    // if (Array.isArray(head(tree))) return filter(fn, tree);
    if (Array.isArray(head(tree))) return filterTree();

    if (fn(head(tree))) return [head(tree), ...filterTree(fn, tail(tree))];
    return filterTree(fn, tail(tree));
}


