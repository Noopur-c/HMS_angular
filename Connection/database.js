import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hospital_db', 'root', 'Noopur', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
