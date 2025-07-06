const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

function countItems(array) {
  return array.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] = acc[curr] + 1;
    }

    return acc;
  }, {});
}

const result = countItems(items);
console.log(result);
