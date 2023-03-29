
const appointment = require("../models/appoinment")
const sequelize = require("../config")
const express = require('express')
const app = express()
const drugDetail = require("../models/drugDetail")
const patientDetail = require("../models/patientDetail")


////---------------------ADD----------------
const addInAppointmentTable = (req , res) =>
{
    console.log( "body" , req.body.id);
 sequelize.sync().then(() => {
    console.log('Appointment table created successfully!');
 
    appointment.create({
        Name: req.body.name,
        Address: req.body.address,
        Age: req.body.age,
        Date: req.body.date
    }).then(rs => {
        console.log(rs)
        res.send("saved data")
        res.json
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


 

}

const addIndrugDetailTable = (req , res) =>
{
sequelize.sync().then(() => {
    console.log('drugDetail table created successfully!');
 
    drugDetail.create({
        Name: req.body.name,
        companyDetail: req.body.company,
        price: req.body.price,
        quantity: req.body.quan
    }).then(rs => {
        console.log(rs)
        res.send("saved")
        res.json
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);

 });

}

const addInpatienDetailTable = (req , res) =>
{
    sequelize.sync().then(() => {
        console.log('Patient table created successfully!');
     
        patientDetail.create({
            Name: req.body.name,
            Address: req.body.address,
            Age: req.body.age,
            Bedno: req.body.bedno
        }).then(rs => {
            console.log(rs)
            res.send("saved")
            res.json
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
     

}



//////--------------------------delete--------------------
const deletefromAppointment = (req , res) =>
{sequelize.sync().then(() => {

    appointment.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}



const deletefromdrugDetail = (req , res) =>
{sequelize.sync().then(() => {

    drugDetail.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}


const deletefrompatientDetail = (req , res) =>
{sequelize.sync().then(() => {

    patientDetail.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}



/////////----------------------UPDATE------------------
const updatepatientDetail = (req , res) =>
{
sequelize.sync().then(() =>
{
    patientDetail.update(
        {
            Bedno: req.boad.bedno,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {console.error(" error update " , error);
    res.send("error");
    });
    
    }).catch((error) => {
        console.error('table not create : ', error);
        res.send("table error")
});

}


const updatedrugDetail = (req , res) =>
{
    sequelize.sync().then(() =>{
    drugDetail.update(
        {
            price: req.body.price,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error");
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error");
});

}


const updateappointment = (req , res) =>
{
    sequelize.sync().then(() =>{
    appointment.update(
        {
            Name: req.body.name,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error")
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error")
});
}

////-------------------Retrive------------------

const retrieveAppointment = (req , res) =>
{
sequelize.sync().then(() => {

    appointment.findOne({
        where: {
            id : req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data get")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});


}

const retrievedrugDetail= (req , res) =>
{
sequelize.sync().then(() => {

    appointment.findOne({
        where: {
            id : req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data get")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});

}


const retrievepatientDetail= (req , res) =>
{
    sequelize.sync().then(() => {

        appointment.findOne({
            where: {
                id : req.body.id
            }
        }).then(rs => {
            console.log(rs)
            res.send("data get")
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send("table error")
     });

}




module.exports = {addInAppointmentTable ,addIndrugDetailTable ,addInpatienDetailTable, deletefromdrugDetail , 
deletefrompatientDetail ,  deletefromAppointment,
updatedrugDetail , updatepatientDetail , updateappointment,
retrievedrugDetail ,  retrievepatientDetail ,  retrieveAppointment
}