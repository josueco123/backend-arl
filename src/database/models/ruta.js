import { Sequelize, DataTypes } from "sequelize";
import dbConfig from "../config/config.js";

const sequelize = new Sequelize(dbConfig.development.url);

const Ruta = sequelize.define('Ruta', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },    
    id_origen: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_destino: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    distancia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },  
}, {
    tableName: 'arl_rutas'
});
export default Ruta;