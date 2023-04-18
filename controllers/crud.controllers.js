const User = require("../models/user.model");
const Appoinment = require("../models/appointment.model");
const Admin = require("../models/admin.models");
const drug = require("../models/drug.model");
const Insurance = require("../models/insurance.models");
const Cookies = require("cookies");
const jwtToken = require("jsonwebtoken");
const sequelize = require("../config");
const { Op } = require('sequelize');
const error = require("../utils/error.handler");


////---------------------ADD----------------
// with error handling

const signUpUser = async (req, res) => {
  try {
    await sequelize.sync();
    console.log("Users table created successfully!");

    const user = await User.create({
      UserID: req.body.id,
      Name: req.body.name,
      Email: req.body.email,
      Password: req.body.pass,
    });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};


const addInDrugTable = async function (req, res) {
  try {
    await sequelize.sync();
    console.log("Users table created successfully!");

    const Drug = await drug.create({
      drugName: req.body.name,
      companyName: req.body.companyName,
      color: req.body.color,
      price: req.body.price
    });
    console.log(Drug);
    res.send(Drug);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};



const addAdmin = async function(req, res) {
  try {
    await sequelize.sync();
    console.log("Users table created successfully!");

    const admin = await Admin.create({
      AdminID: req.body.id,
      Name: req.body.name,
      Email: req.body.email,
      Password: req.body.pass,
    });
    console.log(admin);
    res.send(admin);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};



const addInappointmentTable = async function(req, res) {
  try {
    await sequelize.sync();
    console.log("Users table created successfully!");

    const appointment = await Appoinment.create({
      name: req.body.name,
          age: req.body.age,
          gender: req.body.gender,
          fee: req.body.fee,
    });
    console.log(appointment);
    res.send(appointment);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};

// const addInsuranceTable = (req, res) => {
//   sequelize
//     .sync()
//     .then(() => {
//       console.log("Insurance table created successfully!");

//       Insurance.create({
//         companyName: req.body.companyName,
//         duration: req.body.duration, // in months
//         amount: req.body.amount,
//       })
//         .then((rs) => {
//           console.log(rs);
//           res.send(rs);
//         })
//         .catch((error) => {
//           console.error("Failed to create a new record : ", error);
//         });
//     })
//     .catch((error) => {
//       console.error("Unable to create table : ", error);
//     });
// };

//////--------------------------delete--------------------


const deleteFomUser = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.destroy({
        where: {
          id: req.body.iid,
        },
      })
        .then((data) => {
          if (!data) {
            console.log("data not found");
            res.send(new error(" no id " , 400))
          }
          else
          {
          console.log("Successfully deleted record.");
          res.send("deleted");
          }
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

const deleteFromappointment = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Appoinment.destroy({
        where: {
          name: req.body.name,
        },
      })
        .then((data) => {
          if (!data) {
            console.log("data not found");
            res.send(new error(" no name " , 400))
          }
          else
          {
          console.log("Successfully deleted record.");
          res.send("deleted");
          }
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


const deleteFomAdmin = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Admin.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("admin data deleted");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};



const deleteFomDrug = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Appoinment.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then((data) => {
          if (!data) {
            console.log("data not found");
            res.send(new error(" no id " , 400))
          }
          else
          {
          console.log("Successfully deleted record.");
          res.send("deleted");
          }
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

const deleteFomInsurance = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Insurance.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          console.log("Successfully deleted record.");
          res.send("deleted from insurance ");
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

/////////----------------------UPDATE------------------
const updateappointment = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Appoinment
        .update(
          {
            name: req.body.name,
          },
          {
            where: { id: req.body.id },
          }
        )
        .then(() => {
          console.log(" upadted data ");
          res.send("Appointment data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("table not create : ", error);
      res.send("table error");
    });
};


const upadteUsers = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.update(
        {
          UserID: req.body.userid,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" upadted data ");
          res.send("users data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
      res.send("table error");
    });
};

const upadteAdmin = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Admin.update(
        {
          AdminID: req.body.adminid,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" updated data ");
          res.send(" admin data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
    });
};

const updateDrug = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      drug.update(
        {
          price: req.body.price,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" updated data ");
          res.send("drug data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
    });
};

const upadteInsurance = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Insurance.update(
        {
          amount: req.body.amount,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log(" updated data ");
          res.send("insurance data updated");
        })
        .catch((error) => {
          console.error(" error update ", error);
        });
    })
    .catch((error) => {
      console.error("cannot update : ", error);
    });
};

////-------------------Retrive by id------------------

const signInUser = (req, res) => {
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
          const token = jwtToken.sign({ username: req.body.name, Role: "user" }, 'dfghjk')
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

const signInAdmin = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Admin.findOne({
        where: {
          Name: req.body.name,
          Email: req.body.email,
        },
      })
        .then((rs) => {
          console.log(rs);

          const token = jwtToken.sign({ username: req.body.name, Role: "admin" }, 'rtyui')
          res.status(200).send({
            username: token.username,
            roles: token.Role,
            accessToken: token
          });
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retrieveDrug = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      drug.findOne({
        where: {
          id: req.send.id,
        },
      })
        .then((rs) => {
          console.log(rs);
          res.send("data got");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retriveteInsurance = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Insurance.findOne({
        where: {
          id: req.body.id,
        },
      })
        .then((res) => {
          console.log(res);
          res.send("data got from insurance ");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


//----------------------pagination
const retriveappointment = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.findOne({
        where: {
          name: req.body.name,
        },
      })
        .then((rs) => {
          console.log(rs);
          res.send("data get");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
};

const retriveteallfromDrug = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
  sequelize
    .sync()
    .then(() => {
      drug.findAll({ limit, offset })
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const retriveallfromappointment = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
  sequelize
    .sync()
    .then(() => {
      Appoinment.findAll({ limit, offset })
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retriveteallfromuser = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
  sequelize
    .sync()
    .then(() => {
      User.findAll({ limit, offset })
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

const retriveteallfrominsurance = (req, res) => {
  const { page } = req.query;
  const { limit, offset } = getPagination(page);
  sequelize
    .sync()
    .then(() => {
      Insurance.findAll({ limit, offset })
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const getPagination = (page) => {
  const limit = 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};



//-----------------------Filteration---------------


const filterUsers = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      User.findAll({
        where: {
          id: {
            [Op.between]: [req.body.fromID, req.body.toID]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const filterDrug = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      drug.findAll({
        where: {
          price: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const filterappointment = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Appoinment.findAll({
        where: {
          age: {
            [Op.between]: [req.body.fromAge, req.body.toAge]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const filterInsurance = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Insurance.findAll({
        where: {
          amount: {
            [Op.between]: [req.body.fromPrice, req.body.toPrice]
          }
        }
      })
        .then((data) => {
          console.log(data);
          res.send(data);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};



















module.exports = {
  signUpUser,
  addInappointmentTable,
  deleteFromappointment,
  deleteFomUser,
  updateappointment,
  upadteUsers,
  retriveappointment,
  signInUser,
  signInAdmin,
  addAdmin,
  deleteFomAdmin,
  upadteAdmin,
  addInDrugTable,
  retrieveDrug,
  deleteFomDrug,
  updateDrug,
  retriveteInsurance,
  deleteFomInsurance,
  upadteInsurance,
  retriveteallfromDrug,
  retriveallfromappointment,
  retriveteallfromuser,
  retriveteallfrominsurance,
  filterDrug,
  filterInsurance,
  filterappointment,
  filterUsers
};
