const nested = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];

function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const result = flattenArray(nested);
console.log(result);
