import { app } from './init.js';
import { 
    VIEWS_DIR,
    VIEW_ENGINE ,
    PORT, 
    STATIC_DIR 
} from '../../settings.js';
import { Server } from '../server/server.js';

const config = () => {
    const server = new Server(app)
    server.listen(PORT)
    
    server.setStaticDir(STATIC_DIR)
    server.setViewEngine(VIEW_ENGINE)
    server.setViewDirectory(VIEWS_DIR)
}

export {config}



