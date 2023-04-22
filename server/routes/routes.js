const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/testing").get(controllers.testing);

//return all sources
router.route("/sources").get(controllers.sources);

//add new source
router.route("/add_source").post(controllers.add_source);

//delete source by id
router.route("/delete_source/:id").post(controllers.delete_source);

module.exports = router;