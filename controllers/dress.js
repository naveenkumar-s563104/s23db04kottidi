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


// Handle Earbud create on POST.
exports.dress_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dress();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dress_brand": "Jockey", "dress_size": "XXL", "dress_cost": 556} 
    document.dress_brand = req.body.dress_brand;
    document.dress_size = req.body.dress_size;
    document.dress_cost = req.body.dress_cost;
    try{
        let result = await document.save();
        res.send(result);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
};



// Handle Costume delete form on DELETE.
exports.dress_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Dress delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dress_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Dress update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.dress_view_all_Page = async function(req, res) {
    try{
    theDress = await Dress.find();
    res.render('dress', { title: 'Dress Search Results', results: theDress });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };