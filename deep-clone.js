const exampleObj = {
  name: 'Alice',
  age: 30,
  hobbies: [
    'reading',
    'gaming',
    { type: 'sports', list: ['tennis', 'soccer'] },
  ],
  address: {
    city: 'Wonderland',
    zip: 12345,
    coordinates: { lat: 50.123, lng: 8.456 },
  },
  isActive: true,
};

function deepCloneObject(object) {
  if (typeof object !== 'object') {
    return object;
  }

  const newObject = Array.isArray(object) ? [] : {};

  for (const key in object) {
    const value = object[key];
    newObject[key] = deepCloneObject(value);
  }

  return newObject;
}

const result = deepCloneObject(exampleObj);
console.log(result);
