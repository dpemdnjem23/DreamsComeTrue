const router = require("express").Router();
const controller = require("../controllers/delay");

router.get('/',controller.delayControl)



module.exports = router;

