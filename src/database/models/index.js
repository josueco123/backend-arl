import Sequelize from 'sequelize';
import dbConfig from '../config/config.js';
import Ciudad from './ciudad.js';
import Vuelo from './vuelo.js';
import Cliente from './cliente.js';
import Pasaje from './pasaje.js';

const db = {};

const sequelize = new Sequelize(dbConfig.development.url, dbConfig.development);

db['Ciudad'] = Ciudad;
if (db['Ciudad'].associate) db['Ciudad'].associate(db);
db['Vuelo'] = Vuelo;
if (db['Vuelo'].associate) db['Vuelo'].associate(db);
db['Cliente'] = Cliente;
if (db['Cliente'].associate) db['Cliente'].associate(db);
db['Pasaje'] = Pasaje;
if (db['Pasaje'].associate) db['Pasaje'].associate(db);

db['Vuelo'].belongsTo(Ciudad, {foreignKey: 'id_origen', as: 'ciudad_origen'} );
db['Vuelo'].belongsTo(Ciudad, {foreignKey: 'id_destino', as: 'ciudad_destino'});
db['Pasaje'].belongsToMany(Cliente, {foreignKey: 'clientes_id', as: 'cliente_pasaje'});
db['Pasaje'].belongsToMany(Vuelo, {foreignKey: 'vuelos_id', as: 'vuelo_pasaje'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
