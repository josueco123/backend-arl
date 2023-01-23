import { Router } from "express";
import { getVueloByRuta } from "../controllers/vueloController.js";

const vuelosRouter = Router();

vuelosRouter.post('/getflies',(req, res) => {

    const {origen, destino, fecha_ida} = req.body;

    const data = {
        id_origen: origen,
        id_destino: destino,
        fecha_ida: fecha_ida
    }

    try {
        const vuelos = getVueloByRuta(data).then((resp) =>{
            res.status(200).send({response: resp});
        });
        return vuelos;
    } catch (error) {
        res.status(401).send({ 'mensaje':error});
    }
});
export default vuelosRouter;