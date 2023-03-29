const User = require("../models/user.model");
const sequelize = require("../config/db.config");
const express = require("express");
const app = express();
const secreteKey = require("../config/db.config")
const jwtToken = require("jsonwebtoken");

////---------------------ADD----------------
const addInUserTable = (req, res) => {
  console.log("body", req.body.id);
  sequelize
    .sync()
    .then(() => {
      console.log("Users table created successfully!");

      User.create({
        UserID: req.body.id,
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.pass,
      })
        .then((rs) => {
          console.log(rs);

          // res.cookie("pareparts" ," added");
          // var keys = ['keyboard cat']
          // var cookies = new Cookies(req, res, { keys: keys });
          // cookies.set("LastVisit", new Date().toISOString(), { signed: true }); // Set the cookie to a value
          // cookies.get()
          res.send(rs);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retriveteUsers = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.findOne({
        where: {
          Name: req.body.name,
          Email: req.body.email,
        },
      })
        .then((rs) => {
          console.log(rs);
          var token = jwtToken.sign({username : req.body.name , Role : "user"}, 'dfghjk')
          res.status(200).send({ 
            username: token.username,
            roles: token.Role,
            accessToken: token
          });
        })
        .catch((error) => {
          console.error("Failed to sign data : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const deleteFomUser = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.destroy({
        where: {
          id: req.body.iid,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("deleted");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};






module.exports ={addInUserTable , retriveteUsers , deleteFomUser}