const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");


const appointment = sequelize.define("appointment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fee: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

 });


 module.exports = appointment