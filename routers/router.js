let router = require('express').Router();;
router.get('/',function(req,res){
	res.json({
		status: 'api funcionando',
		message: 'bienvenido al restaurante'
	});
});

var controladorPlato = require('../controller/plato');

router.route('/platos')
.get(controladorPlato.index)
.post(controladorPlato.new);

router.route('/plato/:plato_id')
    .get(controladorPlato.view)
    .patch(controladorPlato.update)
    .put(controladorPlato.update)
    .delete(controladorPlato.delete);// Export API routes


module.exports = router;