import db from "../database/models";

const vueloModel = db.Vuelo;
const Op = db.sequelize;

const getVuelo = async (id) =>{

    try{
        const vuelo = await vueloModel.findByPk(id);
        return vuelo;
    }catch (e){
        console.error(e);
    }
    
};

const getCitesByOrigin = async (id_origen) =>{

    try{
        const cities = await vueloModel.findAll({
            attributes: ['ciudad_destino'],
            where: {
                id_origen: id_origen
            },
            include: [{
                model: db.Ciudad,
                as: 'ciudad_destino'
              }]  
        });

        return cities;
    }catch (e){
        console.error(e);
    }
    
}

const getVuelosRT = async (data) =>{

    try{
        const vuelos = await vueloModel.findOne({ 
            where: { 
                [Op.and]: [ {fecha_id: data.fecha_id}, {id_origen: data.id_origen},
                            { id_destino: data.id_destino},{fecha_regreso: data.fecha_regreso} ]
            } 
        });
        return vuelo;
    }catch (e){
        console.error(e);
    }    
}

const getVuelosOW = async (data) =>{

    try{
        const vuelos = await vueloModel.findOne({ 
            where: { 
                [Op.and]: [ {fecha_id: data.fecha_id}, {id_origen: data.id_origen},
                            { id_destino: data.id_destino}]
            },
            order: [ ['hora_ida', 'DESC'],]
            
        });
        return vuelo;
    }catch (e){
        console.error(e);
    }    
}


const getAllvuelos = async () =>{
    try{
        const vuelos = await vueloModel.findAll();
        return vuelos;
    }catch (e){
        console.error(e);
    }
    
}

const createVuelo = async (vuelo) =>{

    try{
        const vuelo = await vueloModel.create(vuelo)
        return vuelo.id;
    }catch (e){
        console.error(e);
    }
    
};

export { createVuelo, getAllvuelos, getCitesByOrigin, getVuelosOW, getVuelosRT, getVuelo }