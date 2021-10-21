const connection = require('./connection');

/** Busca todos os autores do banco. */
async function getAll() {
  return connection()
    .then((db) => db.collection('products').find().toArray())
    .then((product) => product);
}

/** Cria os produtos do banco. */ 
async function create(name, quantity) {
  return connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }))
    .then((product) => product.ops[0]);
}

/** Busca pelo Nome */
async function findByName(name) {
  return connection()
  .then((db) => db.collection('products').findOne({ name }));
}

module.exports = {
  getAll,
  create,
  findByName,
};

// const findByName = async (firstName, middleName, lastName) => {
//   // Determinamos se devemos buscar com ou sem o nome do meio
//   const query = middleName
//     ? { firstName, middleName, lastName }
//     : { firstName, lastName };

//   // Executamos a consulta e retornamos o resultado
//   const author = await connection()
//     .then((db) => db.collection('authors').findOne(query));

//   // Caso nenhum author seja encontrado, devolvemos null
//   if (!author) return null;

//   // Caso contrário, retornamos o author encontrado
//   return getNewAuthor(author);
// };

// // Converte o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//   id: authorData.id,
//   firstName: authorData.first_name,
//   middleName: authorData.middle_name,
//   lastName: authorData.last_name,
// });

// Cria uma string com o nome completo do autor
// const getNewAuthor = (authorData) => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName]
//     .filter((name) => name)
//     .join(' ');

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     name: fullName,
//   };
// };