//creamos el modelo de base de datos

mongoose = require('mongoose');

var esquemaPlato = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price:{
		type: Date,
		required: true
	},
	type:{
		type:Date,
		default: Date.now
	},
    img:{
		type: String,
		required:true
	}
});


var Plato = module.exports = mongoose.model('plato',esquemaPlato);

module.exports.get = function (callback,limit){
	Plato.find(callback).limit(limit);
}