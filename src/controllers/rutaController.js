import db from "../database/models/index.js";

const rutaModel = db.Ruta;

const getRutasByOrigen = async (id_origen) => {

    try {
        const ciudades = await rutaModel.findAll({
            attributes: ['Ruta.id','ciudad_destino.id'],
            where: { id_origen: id_origen},
            include: [{
                model: db.Ciudad,
                as: 'ciudad_destino'
              }]  
        });
        return ciudades;
    } catch (e) {
        console.error(e);
    }

};

export { getRutasByOrigen }