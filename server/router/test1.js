const router = require("express").Router();
const controller = require("../controllers/test1");

router.get('/',controller.test1Control)



module.exports = router;
