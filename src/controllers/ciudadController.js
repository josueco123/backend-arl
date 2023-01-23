import db from "../database/models/index.js";

const ciudadModel = db.Ciudad;

const getCiudades = async () =>{

    const ciudades = await ciudadModel.findAll();
    return ciudades;
}

export { getCiudades };