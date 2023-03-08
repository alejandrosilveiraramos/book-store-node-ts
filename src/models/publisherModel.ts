import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('publisher')
export class Publisher {
    @PrimaryGeneratedColumn()
    codePublisher: number;

    @Column({type: 'varchar2', nullable: false})
    namePublisher: string;

    @Column({type: 'varchar2', nullable: false})
    cnpj: string;
    
}