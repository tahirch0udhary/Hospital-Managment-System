const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");


const patientDetail = sequelize.define("patientDetail", {
  Name: {
    type: DataTypes.STRING,
  },
  Address: {
    type: DataTypes.STRING,
  },
  Age: {
    type: DataTypes.INTEGER,
  },
  Bedno: {
    type: DataTypes.INTEGER,
  }

});


module.exports = patientDetail