async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'mysql',
    password: 'Sql_82129499@',
  });
  console.log('conectou no MySQL');
  global.connection = connection;
  return connection;
}

async function selectCostumers() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM singular_cars.clientes');
  return rows;
}

async function insertCustomer(customer) {
  const conn = await connect();
  const sql =
    'INSERT INTO singular_cars.clientes(nome, tel, endereco, Email) VALUES (?,?,?,?);';
  const values = [
    customer.nome,
    customer.tel,
    customer.endereco,
    customer.Email,
  ]; //já trata sql injection
  return await conn.query(sql, values);
}

async function updateCustomer(id, customer) {
  const conn = await connect();
  const sql =
    'UPDATE singular_cars.clientes SET nome=?, tel=?, endereco=?, Email=? WHERE id_cliente=?';
  const values = [
    customer.nome,
    customer.tel,
    customer.endereco,
    customer.Email,
    id,
  ];
  return await conn.query(sql, values);
}

module.exports = { selectCostumers, insertCustomer, updateCustomer };
