import httpServer from './config/server.js';
import './config/env.js'

const indexServer = async () => {
    
    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor escuchando en el puerto         ${process.env.PORT}`);
    });
};

indexServer();