const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

function countItems(arr) {
  return arr.reduce((acc, curr) => {
    !acc[curr] ? (acc[curr] = 1) : (acc[curr] = acc[curr] + 1);
    return acc;
  }, {});
}

const result = countItems(items);
console.log(result);
