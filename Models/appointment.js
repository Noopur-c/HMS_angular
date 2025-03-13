import { DataTypes } from 'sequelize';
import sequelize from '../Connection/database.js';

const Appointment = sequelize.define('Appointment', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  });

  
export default Appointment;