import { Request, response, Response } from 'express';
import  AppDataSource  from '../config/database';
import { Author } from '../models/authorModel';

export class AuthorController { 

    // Create a new author --Start
    async createAuthor(req: Request, res: Response){
        const { firstName, lastName, birthDate } : {
            firstName: string,
            lastName: string,
            birthDate: Date
        } = req.body

        const author = new Author();

        author.firstName = firstName;
        author.lastName = lastName;
        author.birthDate = birthDate;

        const repo = AppDataSource.getRepository(Author)

        await repo.save(author)
        
        return res.status(201).json(author)
    }

    // Create a new author --End

    // Read author --Start
    async readAuthor(req: Request, res: Response){
        const id = req.params.id;

        const repo = AppDataSource.getRepository(Author)
        const author = await repo.findOneBy({ codeAuthor: parseInt(id, 10)})

        res.status(200).json(author)
    }
    // Read author --End
    // Update author --Start
    async updateAuthor(req: Request, res: Response){
        const id = req.params.id;
        const { firstName, lastName, birthDate } : {
            firstName: string,
            lastName: string,
            birthDate: Date
        } = req.body

        const repo = AppDataSource.getRepository(Author)
        const author = await repo.findOneBy({ codeAuthor: parseInt(id, 10)})

        author.firstName = firstName;
        author.lastName = lastName;
        author.birthDate = birthDate;

        await repo.save(author)

        return res.status(200).json(author)
    }
    // Update author --End
    // Delete author --Start
    async deleteAuthor(req: Request, res: Response){
        const id = req.params.id;

        const repo = AppDataSource.getRepository(Author)

        await repo.delete(id)

        return res.status(200).json({ message: 'Author deleted successfully'})
    } 
    // Delete author --End
    // Read All author --Start
    async readAuthorsAll(req: Request, res: Response){

        const repo = AppDataSource.getRepository(Author)
        const authors = await repo.find()
    
        res.status(200).json(authors)
    }
    // Read All author --End
    
};