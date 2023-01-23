import { Router } from "express";
import { getCiudades } from "../controllers/ciudadController.js";

const citiesRouter = Router();

citiesRouter.get('/getcities', (req, res) => {
    try {
        getCiudades().then((resp) =>{
            res.status(200).send(resp);
        });
        

    } catch (error) {
        res.status(401).send({ 'mensaje':error});
    }
  });

export default citiesRouter;