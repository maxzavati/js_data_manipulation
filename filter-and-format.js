const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
];

function formatActiveUsers(users) {
  return users
    .filter((user) => user.active)
    .map((user) => user.name)
    .join(', ');
}

const response = formatActiveUsers(users);
console.log(response);
