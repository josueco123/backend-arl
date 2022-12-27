import { Sequelize, DataTypes } from "sequelize";
import dbConfig from '../config/config.js';
import Vuelo from "./vuelo.js";

const sequelize = new Sequelize(dbConfig.development.url);

const Ciudad = sequelize.define('Cuidad', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    tableName: 'arl_ciudades'
});
//Ciudad.hasMany(Vuelo, {foreignKey: 'id_origen', as: 'origen'});
//Ciudad.hasMany(Vuelo, {foreignKey: 'id_destino', as: 'destino'});
export default Ciudad;