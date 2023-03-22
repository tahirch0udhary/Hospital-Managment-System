const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const appointment = sequelize.define("appointment", {
   
    Name: {
      type: DataTypes.STRING,
    },
    Address: {
        type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.INTEGER,
    },
    Date: {
      type: DataTypes.DATE,
    }

 });

 module.exports = appointment