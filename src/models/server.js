const Sequelize = require("sequelize");

const conString = "postgres://postgres:password@pulpy.czm68ie38mof.us-east-1.rds.amazonaws.com:5432/web_site";
const sequelize = new Sequelize(conString);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
  // return sequelize.sync();
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;