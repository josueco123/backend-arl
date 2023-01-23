import httpServer from './config/server.js';
import './config/env.js'
import db from './database/models/index.js';

const sequelize = db.sequelize;

const connectDB = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

const indexServer = async () => {
    
    await connectDB();    
    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    });
};

indexServer();