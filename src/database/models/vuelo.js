import { Sequelize, DataTypes } from "sequelize";
import dbConfig from '../config/config.js';

const sequelize = new Sequelize(dbConfig.development.url);

const Vuelo = sequelize.define('Vuelo', {
    // Model attributes are defined here
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
    fecha_ida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_ida: {
        type: DataTypes.TIME,
        allowNull: false
    },
    fecha_regreso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_regreso: {
        type: DataTypes.TIME,
        allowNull: false
    },
    sillas_disponibles: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    distancia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    // Other model options go here
    tableName: 'arl_vuelos'
});

export default Vuelo;