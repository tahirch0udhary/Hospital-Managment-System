const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const drugDetail = sequelize.define("drugDetail", {
    Medicine_Name: {
      type: DataTypes.STRING,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    quantity: {
        type: DataTypes.INTEGER,
    }

 });


 module.exports = drugDetail