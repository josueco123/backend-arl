import { Sequelize, DataTypes } from "sequelize";
import dbConfig from '../config/config.js';

const sequelize = new Sequelize(dbConfig.development.url);

const Pasaje = sequelize.define('Pasaje', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },    
    vuelos_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clientes_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    silla: {
        type: DataTypes.STRING,
        allowNull: false
    },
    millas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },    
}, {
    tableName: 'arl_pasajes'
});


export default Pasaje;