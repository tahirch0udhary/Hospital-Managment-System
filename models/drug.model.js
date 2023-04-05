const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config")

const drug = sequelize.define("drug", {
    drugName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

 });

module.exports = drug


