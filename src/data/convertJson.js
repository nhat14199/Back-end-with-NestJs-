const fs = require('fs');

const data = [
  {
    userName: 'userName 1',
    birthday: 1711353900,
    userId: 'userId 1',
    age: 49,
    status: false,
    id: '1',
  },
  {
    userName: 'userName 2',
    birthday: 1711353840,
    userId: 'userId 2',
    age: 100,
    status: false,
    id: '2',
  },
  {
    userName: 'userName 3',
    birthday: 1711353780,
    userId: 'userId 3',
    age: 66,
    status: false,
    id: '3',
  },
  {
    userName: 'userName 4',
    birthday: 1711353720,
    userId: 'userId 4',
    age: 97,
    status: false,
    id: '4',
  },
  {
    userName: 'userName 5',
    birthday: 1711353660,
    userId: 'userId 5',
    age: 17,
    status: false,
    id: '5',
  },
  {
    userName: 'userName 6',
    birthday: 1711353600,
    userId: 'userId 6',
    age: 1,
    status: false,
    id: '6',
  },
  {
    userName: 'userName 7',
    birthday: 1711353540,
    userId: 'userId 7',
    age: 73,
    status: false,
    id: '7',
  },
  {
    userName: 'userName 8',
    birthday: 1711353480,
    userId: 'userId 8',
    age: 1,
    status: false,
    id: '8',
  },
  {
    userName: 'userName 9',
    birthday: 1711353420,
    userId: 'userId 9',
    age: 74,
    status: false,
    id: '9',
  },
  {
    userName: 'userName 10',
    birthday: 1711353360,
    userId: 'userId 10',
    age: 92,
    status: false,
    id: '10',
  },
];

const newJson = JSON.stringify(data);
fs.writeFileSync('dataJson.txt', newJson);
