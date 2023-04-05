const express = require('express')
const router = express.Router()
const {isUser} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')

router.post('/signUpUser' , fuction.signUpUser);
router.get('/signIn' , fuction.signInUser);

router.post('/adddrug' , isUser ,  fuction.addInDrugTable)
router.post('/addappointment' ,isUser, fuction.addInappointmentTable)

router.get('/retrivedrugbyid' ,isUser, fuction.retrieveDrug)
router.get('/retriveappointmentbyid' ,isUser, fuction.retriveappointment)

router.get('/searchInsurancebyPrice', isUser, fuction.filterInsurance)
router.get('/searchdrugbyPrice', isUser, fuction.filterDrug)
router.get('/searchappointmentbyname', isUser, fuction.filterappointment)

router.get('/drugpage' ,  isUser , fuction.retriveteallfromDrug)
router.get('/appointmentpage' ,  isUser , fuction.retriveallfromappointment)
router.get('/InsurancePage' , isUser, fuction.retriveteallfrominsurance)

router.put('/updatedrug',isUser, fuction.updateDrug)
router.put('/updateappointment',isUser, fuction.updateappointment)

router.delete('/deletedrug' , isUser, fuction.deleteFomDrug)
router.delete('/deleteappointment' , isUser, fuction.deleteFromappointment)



router.get('*', function(req, res){
    res.status(404).send('galat url enter kar rha hy');
  });

module.exports = router