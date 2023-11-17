var express = require('express');
const dress_controller= require('../controllers/dress');
var router = express.Router();
/* GET costumes */
router.get('/', dress_controller.dress_view_all_Page );

/* GET detail costume page */
router.get('/detail', dress_controller.dress_view_one_Page);

/* GET create costume page */
router.get('/create', dress_controller.dress_create_Page);
/* GET delete costume page */
router.get('/delete', dress_controller.dress_delete_Page);


/* GET create update page */
router.get('/update', dress_controller.dress_update_Page);
module.exports = router;
