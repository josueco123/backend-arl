import Sequelize from 'sequelize';
import dbConfig from '../config/config.js';
import Ciudad from './ciudad.js';
import Vuelo from './vuelo.js';
import Cliente from './cliente.js';
import Pasaje from './pasaje.js';
import Ruta from './ruta.js';

const db = {};

const sequelize = new Sequelize(dbConfig.development.url, dbConfig.development);

db['Ciudad'] = Ciudad;
if (db['Ciudad'].associate) db['Ciudad'].associate(db);
db['Cliente'] = Cliente;
if (db['Cliente'].associate) db['Cliente'].associate(db);
db['Ruta'] = Ruta;
if (db['Ruta'].associate) db['Ruta'].associate(db);
db['Vuelo'] = Vuelo;
if (db['Vuelo'].associate) db['Vuelo'].associate(db);
db['Pasaje'] = Pasaje;
if (db['Pasaje'].associate) db['Pasaje'].associate(db);


db['Ruta'].belongsTo(Ciudad, {foreignKey: 'id_origen', as: 'ciudad_origen'} );
db['Ruta'].belongsTo(Ciudad, {foreignKey: 'id_destino', as: 'ciudad_destino'});
db['Vuelo'].belongsTo(Ruta, {foreignKey: 'ruta_id', as: 'ruta_vuelo'});
db['Pasaje'].belongsTo(Cliente, {foreignKey: 'clientes_id', as: 'cliente_pasaje'});
db['Pasaje'].belongsTo(Vuelo, {foreignKey: 'vuelos_id', as: 'vuelo_pasaje'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
