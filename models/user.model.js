const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("users", {
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }

 });

 module.exports = User