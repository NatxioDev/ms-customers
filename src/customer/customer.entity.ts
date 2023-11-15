import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class CustomerEntity {

    @PrimaryGeneratedColumn()
    idCustomer: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    ci: string;

    @Column()
    status: number;
}
