import { Sequelize, DataTypes } from "sequelize";
import dbConfig from '../config/config.js';

const sequelize = new Sequelize(dbConfig.development.url);

const Cliente = sequelize.define('Cliente', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },    
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    millas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },    
}, {
    // Other model options go here
    tableName: 'arl_clientes'
});
export default Cliente;