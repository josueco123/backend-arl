import { Router } from "express";
import { getClientes } from "../controllers/clienteController.js";

const clientesRouter = Router();

clientesRouter.get('/getclientes', (req, res) => {
    try {
        getClientes().then((resp) =>{
            res.status(200).send({ users: resp});
        });
        

    } catch (error) {
        res.status(401).send({ 'mensaje':error});
    }
  });


  export default clientesRouter;