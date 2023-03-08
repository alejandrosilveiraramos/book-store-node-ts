import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from './bookModel';



@Entity('author')
export class Author {
    @PrimaryGeneratedColumn()
    codeAuthor: number;

    @Column({type: 'varchar2', nullable: false})
    firstName: string;

    @Column({type: 'varchar2', nullable: false})
    lastName: string;

    @Column({type: 'date', nullable: false})
    birthDate: Date;

    @OneToMany(() => Book, (book) => book.author)
    book: Book[]

}