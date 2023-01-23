import db from "../database/models/index.js";

const vueloModel = db.Vuelo;
const getVuelo = async (id) => {

    try {
        const vuelo = await vueloModel.findByPk(id);
        return vuelo;
    } catch (e) {
        console.error(e);
    }

};

const getVueloByRuta = async (data) => {

    try {
        const vuelos = await vueloModel.findAll({
            where: {
                fecha: data.fecha_ida,                
            },
            include: {
                model: db.Ruta,
                as: 'ruta_vuelo',
                where: {
                    id_origen: data.id_origen,
                    id_destino: data.id_destino
                },
                include: [{
                    model: db.Ciudad,
                    as: 'ciudad_destino'
                  },
                  {
                    model: db.Ciudad,
                    as: 'ciudad_origen'
                  }]  
              }  
        });
        return vuelos;
    } catch (error) {
        console.error(error);
    }
}


const getAllvuelos = async () => {
    try {
        const vuelos = await vueloModel.findAll({

        });
        return vuelos;
    } catch (e) {
        console.error(e);
    }

}

const createVuelo = async (dataVuelo) => {

    try {
        const vuelo = await vueloModel.create(dataVuelo)
        return vuelo.id;
    } catch (e) {
        console.error(e);
    }

};

export { createVuelo, getAllvuelos, getVuelo, getVueloByRuta }