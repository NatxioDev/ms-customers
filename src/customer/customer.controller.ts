import { Controller, Body, Delete, Get, Param, Post, Put, HttpStatus } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './customer.dto';


@Controller('customers')
export class CustomerController {

    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async findAll(){
        return{
            statusCode: HttpStatus.OK,
            data: await this.customerService.findAll()
        };
    }

    @Get(':idCustomer')
    async findOneById(@Param('idCustomer') idCustomer: number){
        return {
            statusCode: HttpStatus.OK,
            data: await this.customerService.findById(idCustomer),
        };
    }

    @Post('save')
    async create(@Body() customerModel: CustomerDto){
        return {
            statusCode: HttpStatus.OK,
            message: 'Customer added successfully',
            data: await this.customerService.insert(customerModel),
        };
    }

    @Put(':idCustomer')
    async update(@Param('idCustomer') idCustomer: number, @Body() data: Partial<CustomerDto>){
        return {
            statusCode: HttpStatus.OK,
            message: 'Customer update successfully',
            data: await this.customerService.update(idCustomer, data),
        };
    }

    @Delete(':idCustomer')
    async delete (@Param('idCustomer') idCustomer: number){
        await this.customerService.delete(idCustomer);
        return {
            statusCode: HttpStatus.OK,
            message: 'Customer deleted successfully',
        };
    }
}
