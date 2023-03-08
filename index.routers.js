const express = require("express");
const router = express.Router();
const {Admindashboard,adminLogin,Addpatinet,removepatient,Updaterecord,AddDoctor,removedoctor,updateDoctor,home}= require ("../controllers/adminControllers");

router.get("/admin/login",(req,res) =>
{
    adminLogin(req,res);
});
router.get("/dashboard",(req,res) =>
{
    Admindashboard(req,res);
});
router.get("/add/patient",(req,res) =>
{
    Addpatinet(req,res);
});
router.get("/remove/patient",(req,res) =>
{
    removepatient(req,res);
});
router.get("/Update/record", (req, res) => {
    Updaterecord(req,res);
  });

  router.get("/Add/doctor", (req, res) => {
    AddDoctor(req,res);
  });

  router.get("/remove/doctor", (req, res) => {
    removedoctor(req,res);
  });
  router.get("/update/doctor", (req, res) => {
    updateDoctor(req,res);
  });
  router.get("/home", (req, res) => {
    home(req,res);
  });

 
module.exports = router;