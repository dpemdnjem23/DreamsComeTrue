const router = require("express").Router();
const controller = require("../controllers/user");

router.get('/',controller.userinfoControl)
router.post('/',controller.userRegisterControl)
router.get('/:userIndex/hasCat',controller.userRegisterControl)
router.post('/:userIndex/hasCat',controller.userRegisterControl)
// router.delete('/',controller.userRegisterControl)
module.exports = router;
