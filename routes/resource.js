var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dress_controller = require('../controllers/dress');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/dress', dress_controller.dress_create_post);
// DELETE request to delete Costume.
router.delete('/dress/:id', dress_controller.dress_delete);
// PUT request to update Costume.
router.put('/dress/:id', dress_controller.dress_update_put);
// GET request for one Costume.
router.get('/dress/:id', dress_controller.dress_detail);
// GET request for list of all Costume items.
router.get('/dress', dress_controller.dress_list);
module.exports = router;