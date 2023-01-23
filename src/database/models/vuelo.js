import { Sequelize, DataTypes } from "sequelize";
import dbConfig from '../config/config.js';
import Ciudad from "./ciudad.js";
import Cliente from "./cliente.js";

const sequelize = new Sequelize(dbConfig.development.url);

const Vuelo = sequelize.define('Vuelo', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },   
    ruta_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },         
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },   
    sillas_disponibles: {
        type: DataTypes.INTEGER,
        allowNull: false
    },    
    valor_unitario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    escalas: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {    
    tableName: 'arl_vuelos'
});

export default Vuelo;