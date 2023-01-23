import { Router } from "express";
import { getRutasByOrigen } from "../controllers/rutaController.js";

const rutasRouter = Router();

rutasRouter.get('/getrutas/:origenId',(req, res) => {

    const { origenId } = req.params;    
    try {
        getRutasByOrigen(origenId).then((resp) =>{
            res.status(200).send(resp);
        });        
    } catch (error) {
        res.status(401).send({ 'mensaje':error});
    }
  });

  export default rutasRouter;