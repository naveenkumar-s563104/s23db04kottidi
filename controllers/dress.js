var Dress = require('../models/dress');
// List of all Costumes
exports.dress_list = async function(req, res) {
    try{
    theDress = await Dress.find();
    res.send(theDress);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Costume.
exports.dress_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Dress detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.dress_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Dress create POST');
};
// Handle Costume delete form on DELETE.
exports.dress_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Dress delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dress_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Dress update PUT' + req.params.id);
};
