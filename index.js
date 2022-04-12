(async () => {
  const db = require('./connectionDB');
  console.log('começou');
  console.log('INSERT INTO singular_cars.clientes;');

  // const result = await db.insertCustomer({
  //   nome: 'Silvia',
  //   tel: '6298733-4459',
  //   endereco: 'Rua 30, nº 56, centro',
  //   Email: 'silvia@email.com',
  // });
  // console.log(result);

  console.log('UPDATE singular_cars.clientes;');
  const result2 = await db.updateCustomer(6, {
    nome: 'Barbara Vasconcelos',
    tel: '6299988-9099',
    endereco: 'Rua 13, nº 94, sul2',
    Email: 'silviaara@email.com',
  });
  console.log(result2);

  console.log('SELECT * FROM singular_cars.clientes;');
  const clientes = await db.selectCostumers();
  console.log(clientes);
})();
