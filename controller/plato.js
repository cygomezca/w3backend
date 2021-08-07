Plato = require('../models/plato');

exports.index = function (req,res){

Plato.get(function(err,platos){

	if(err){
		res.json({
			status:"error",
			message:err
		});
	}
        res.json({
            status:"success",
            message:"el plato listado correctamente",
            data: platos
        });
    });
};


exports.new = function (req, res) {
    var plato = new Plato();
    plato.name = req.body.name ? req.body.name : plato.name;
    plato.description = req.body.description;
    plato.price = req.body.price;
    plato.type = req.body.type;
    plato.img = req.body.img;
   // save the tripulante and check for errors
    plato.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo tripulante creado!',
                data: tripulante
            });
    });
};


exports.view = function (req, res) {
    Plato.findById(req.params.plato_id, function (err, plato) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del tripulante..',
            data: plato
        });
    });
};

exports.update = function (req, res) {
    Plato.findById(req.params.plato_id, function (err, plato) {
        if (err)
            res.send(err);
        plato.name = req.body.name ? req.body.name : plato.name;
        plato.description = req.body.description;
        plato.price = req.body.price;
        plato.type = req.body.type;
        plato.img = req.body.img;

        plato.save(function (err) {
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo plato!',
                data: plato
            });
        });
    });
};

exports.delete = function (req, res) {
    Plato.remove({
        _id: req.params.plato_id
    }, function (err, tripulante) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Plato borraro'
        });
    });
};
