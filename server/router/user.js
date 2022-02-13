const router = require("express").Router();
const controller = require("../controllers/user");

router.get('/',controller.userinfoControl)
router.post('/',controller.userRegisterControl)
router.get('/:userIndex/hasCat',controller.userHasCat)
router.post('/:userIndex/hasCat',controller.userHasCatUpdate)
router.delete('/:userIndex',controller.userDelete)
// router.delete('/',controller.userRegisterControl)
module.exports = router;
