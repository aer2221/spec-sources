const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/hello").get(controllers.hello);

//return all sources
router.route("/sources").get(controllers.getAllSources);

//add new source
router.route("/add_source").post(controllers.addSource);

//delete source by id
router.route("/delete_source/:id").post(controllers.deleteSource);

module.exports = router;