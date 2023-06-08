const Promo = require('../models/promo');

module.exports = {

    create(req, res) {

        const promo = req.body;

        Promo.create(promo, (err, id) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'La promo se creo correctamente',
                data: `${id}` // EL ID DE LA NUEVA CATEGORIA
            });

        });

    },

    getAll(req, res) {
        Promo.getAll((err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar las promo',
                    error: err
                });
            }

            return res.status(201).json(data);
        });
    }

}