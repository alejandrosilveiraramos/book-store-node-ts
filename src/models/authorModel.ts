import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


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

}