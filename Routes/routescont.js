const express = require("express");
const router = express();
const Staff = require("../Controllers/Controler_func");

router.get("/home", Staff.gethome);
router.get("/login", Staff.login );
router.get("/RegisterP", Staff.RegisterP);
router.get("/infoDesk", Staff.infoDesk);
router.get("/newsEvent", Staff.newsEvent);


module.exports = router;