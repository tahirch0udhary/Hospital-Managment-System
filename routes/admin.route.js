const express = require('express')
const router = express.Router()
const {isAdmin} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')

router.get('/signIn' , fuction.signInAdmin);
router.post('/addAdmin' , fuction.addAdmin)
router.post('/signUpUser' , fuction.signUpUser)


router.post('/adddrug' , isAdmin ,  fuction.addInDrugTable)
router.post('/addInsurance' ,isAdmin, fuction.addInsuranceTable)
router.post('/addappointment' ,isAdmin, fuction.addInappointmentTable)

router.get('/retrivedrugsbyid' ,isAdmin, fuction.retrieveDrug)
router.get('/retriveinsurancebyid' ,isAdmin, fuction.retriveteInsurance)
router.get('/retriveappointmentbyid' ,isAdmin, fuction.retriveappointment)

router.get('/searchInsurancebyPrice', isAdmin, fuction.filterInsurance)
router.get('/searchdrugbyPrice', isAdmin, fuction.filterDrug)
router.get('/searchappointment', isAdmin, fuction.filterappointment)
router.get('/searchUsers' , isAdmin , fuction.filterUsers)

router.get('/drugpage' ,  isAdmin , fuction.retriveteallfromDrug)
router.get('/appointmentpage' ,  isAdmin , fuction.retriveallfromappointment)
router.get('/InsurancePage' , isAdmin, fuction.retriveteallfrominsurance)
router.get('/UsersPage', isAdmin , fuction.retriveteallfromuser)

router.put('/updateuser', isAdmin, fuction.upadteUsers)
router.put('/updatedrug',isAdmin, fuction.updateDrug)
router.put('/updateinsurance',isAdmin, fuction.upadteInsurance)
router.put('/updateappointment',isAdmin, fuction.updateappointment)

router.delete('/deleteuser' , isAdmin, fuction.deleteFomUser)
router.delete('/deletedrug' , isAdmin, fuction.deleteFomDrug)
router.delete('/deleteinsurance' , isAdmin, fuction.deleteFomInsurance)
router.delete('/deleteappointment' , isAdmin, fuction.deleteFromappointment)

router.get('*', function(req, res){
    res.status(404).send('incorrect url');
  });

module.exports = router