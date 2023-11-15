import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity'
import { CustomerDto } from './customer.dto';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(CustomerEntity)
        private readonly customerRepository: Repository<CustomerEntity>){
    }

    async findAll(){
        return await this.customerRepository.find();
    }

    async findById(idCustomer: number) {
        return await this.customerRepository.findOneBy({ idCustomer });
    }
    
    async insert(data: CustomerDto){
        const customer = this.customerRepository.create(data);
        await this.customerRepository.save(data);
        return customer;
    }

    async update(idCustomer: number, data: Partial<CustomerDto>){
        await this.customerRepository.update({ idCustomer }, data);
        return await this.customerRepository.findOneBy({ idCustomer });
    }
    
    async delete(idCustomer: number) {
        await this.customerRepository.delete({ idCustomer });
        return { deleted: true };
    }
}
