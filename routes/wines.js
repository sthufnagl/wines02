/**
 * Created with JetBrains WebStorm.
 * User: shufnagl
 * Date: 29.03.13
 * Time: 20:43
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose')
    , db = mongoose.connect('mongodb://thor/winedb');


var schema = new mongoose.Schema({

    name: String,
    year: String,
    grapes: String,
    country: String,
    region: String,
    description: String,
    picture: String
});


var Wines = mongoose.model('wines', schema);
/*Wines.find({}).each(function(err, wine) {
    if (wine != null) {
        console.log('ID:' + wine._id);
        console.log(wine.description);
    } });*/


exports.list = function(req, res, next){
    Wines.find({}, function(err, wines){
        console.log('wines ' + wines.description);
        if (err) return next(err);
        res.render('wines', {
            title: 'Wines',
            wines: wines
        }); });
};

