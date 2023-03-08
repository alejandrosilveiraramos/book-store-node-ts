import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './authorModel';


@Entity('book')
export class Book {
    @PrimaryGeneratedColumn()
    codeBook: number;

    @Column({type: 'varchar2', nullable: false})
    nameBook: string;

    @Column({type: 'varchar2', nullable: false})
    numberEdition: string;

    @Column({type: 'varchar2', nullable: false})
    realeaseYear: string;

    @ManyToOne(() => Author, (author) => author.book)
    author: Author;
}