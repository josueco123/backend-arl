import { Sequelize, DataTypes } from "sequelize";
import dbConfig from "../config/config.js";

const sequelize = new Sequelize(dbConfig.development.url);

const Ciudad = sequelize.define('Cuidad', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    
    tableName: 'arl_ciudades'
});

export default Ciudad;