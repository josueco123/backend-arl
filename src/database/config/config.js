import '../../config/env.js'

const dbConfig = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: '127.0.0.1',
    dialect: 'postgres',    
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',    
  }
};

export default dbConfig;