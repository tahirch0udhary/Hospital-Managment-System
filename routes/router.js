const express = require('express')
const router = express.Router()

const fuction = require('../controllers/crud.controllers')


router.post('/addAppointment' , fuction.addInAppointmentTable)
router.get('/addDrug' , fuction.addIndrugDetailTable)
router.get('/addPatient' , fuction.addInpatienDetailTable)
router.get('/deleteAppointment' , fuction.deletefromAppointment)
router.get('/deleteDrug' , fuction.deletefromdrugDetail)
router.get('/deletePatient' , fuction.deletefrompatientDetail)
router.get('/retriveAppointment' , fuction.retrieveAppointment)
router.get('/retriveDrug' , fuction.retrievedrugDetail)
router.get('/retrivespareparts' , fuction.retrievepatientDetail)
router.get('/updateAppointment', fuction.updateappointment)
router.get('/updateDrug', fuction.updatedrugDetail)
router.get('/updatePatient', fuction.updatepatientDetail)



module.exports = router