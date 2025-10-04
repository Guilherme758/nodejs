require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco estabelecida com sucesso.');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco:', error.message);
  }
}

testConnection();

module.exports = sequelize ;
