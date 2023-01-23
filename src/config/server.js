import expressApp from './middlewares.js';
import { createServer } from 'http';


const httpServer = createServer(expressApp);

export default httpServer;