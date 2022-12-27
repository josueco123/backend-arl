import db from "../database/models";

const pasajeModel = db.Pasaje;

const getPasajeByCliente = async (cliente_id) =>{

    try{
        const pasaje = await pasajeModel.findOne({
            where: { clientes_id: cliente_id},
            include: [{
                model: db.Cliente,
                as: 'cliente_pasaje'
              },{
                model: db.Vuelo,
                as: 'vuelo_pasaje'
              }
            ] 
        })
        return pasaje;
    }catch (e){
        console.error(e);
    }
};

const createPasaje = async (data) =>{

    try {
        const pasaje = await pasajeModel.create(data);
    } catch (error) {
        console.error(error);
    }
};

export { createPasaje, getPasajeByCliente };