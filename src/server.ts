import express from 'express';
import AppDataSource from './config/database';
import { AuthorController } from './controller/authorController';


AppDataSource.initialize().then(() => {

    console.log('Database connetion success');

    const app = express();

    app.use(express.json());

    app.listen(8000);


    // Routes CRUD --Start
    app.post('/authors', new AuthorController().createAuthor);
    app.get('/authors/:id', new AuthorController().readAuthor);
    app.put('/authors/:id', new AuthorController().updateAuthor);
    app.delete('/authors/:id', new AuthorController().deleteAuthor);
    app.get('/authors', new AuthorController().readAuthorsAll);
    
    // Routes CRUD --End

}).catch(e => console.log('[ERROR] connetion Databas failure', e))


