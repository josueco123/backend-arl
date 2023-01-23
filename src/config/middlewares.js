import express from 'express';
import citiesRouter from '../routes/ciudadesRoutes.js';
import vuelosRouter from '../routes/vuelosRouter.js';
import rutasRouter from '../routes/rutasRoutes.js';
import clientesRouter from '../routes/clienteRoutes.js';
import cors from 'cors';

const expressApp = express();

// Middlewares
expressApp.use(cors({
    origin: ['http://localhost:3000']
}));
expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use(clientesRouter);
expressApp.use(citiesRouter);
expressApp.use(vuelosRouter);
expressApp.use(rutasRouter);


export default expressApp;