const router = require("express").Router();
const controller = require("../controllers/test2");

router.get('/',controller.test2Control)


module.exports = router;
