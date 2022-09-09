import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){

    }

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id',ParseUUIDPipe ) id:string){
        console.log({id})
        return this.carsService.findOne(id);
    }

    @Post()
    createCar( @Body() body:CreateCarDTO ){
        return this.carsService.create(body);
    }

    @Put(':id')
    updateCar( 
        @Body() body:UpdateCarDTO, 
        @Param('id',ParseUUIDPipe) id:string
        ){
        return body
    }

    @Delete()
    deleteCar( @Param('id', ParseUUIDPipe) id:string ){
        this.carsService.delete(id);
    }
}
