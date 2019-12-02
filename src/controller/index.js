const userList = [
  { id: '1', name: '박재민', engName: 'Jamie' },
  { id: '2', name: '민팍', engName: 'minPak' },
  { id: '3', name: '제이미', engName: 'Jamie' },
];

const getUsers = (ctx) => {
  ctx.body = userList;
};

const getUser = (ctx) => {
  const { id } = ctx.params;

  ctx.body = userList.filter((user) => user.id === id);
};

module.exports = {
  getUsers,
  getUser
};
