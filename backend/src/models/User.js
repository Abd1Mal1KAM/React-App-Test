import { DataTypes, Model, Sequelize } from 'sequelize';
import db from './index.js'; // Sequelize instance

const sequelize = db.sequelize;

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);