const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "127.0.0.1",
  user: "root",
  password: "cdac",
  database: "proj",
  port: "3306",
};
const connection = mysql.createConnection(dbinfo);
console.log("establich");

const selectUser = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `select *from table2`;
  const list = await connection.queryAsync(sql, [10]);
  return list;
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `insert into table2 (first,last,email,mob,user,pwd) values(?,?,?,?,?,?)`;
  connection.queryAsync(sql, [
    user.first,
    user.last,
    user.email,
    user.mob,
    user.user,
    user.pwd,
  ]);
  console.log("record added");
  await connection.endAsync();
};

const user = {
  first: "dina",
  last: "dalavai",
  email: "dina.06@gmail.com",
  mob: 1234,
  user: "dian456",
  pwd: "dalvai@12",
};
addUser(user);

module.exports = { selectUser, addUser };
