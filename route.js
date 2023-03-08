const express = require("express");
const router = express();
const user = require("../controllers/function");

router.get("/home", user.gethome);
router.get("/facilitation", user.facilities );
router.get("/department", user.department);
router.get("/infoDesk", user.infoDesk);
router.get("/newsEvent", user.newsEvent);
router.get("/aboutus", user.aboutus);
router.get("/complaints", user.complaints);
router.get("/career", user.career);
router.get("/contactus", user.contactus);


module.exports = router;

