const words = [
  'apple',
  'banana',
  'apricot',
  'blueberry',
  'cherry',
  'avocado',
  'blackberry',
  'cranberry',
];

function groupByFirstLetter(list) {
  return list.reduce((acc, curr) => {
    const firstChar = curr.slice(0, 1);

    if (!acc[firstChar]) {
      acc[firstChar] = [curr];
    } else {
      acc[firstChar].push(curr);
    }

    !acc[firstChar] ? (acc[firstChar] = [curr]) : acc[firstChar].push(curr);

    return acc;
  }, {});
}

const response = groupByFirstLetter(words);
console.log(response);
