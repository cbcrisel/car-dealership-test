import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid'
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars:Car[] = [
        /* {
            id:uuid(),
            brand:'Toyota',
            model:'Corolla'
        } */
    ]

    findAll(){
        return this.cars;
    }
    findOne(id:string){
        const car = this.cars.find(car=>car.id===id);

        if(!car){
            throw new NotFoundException(`Car with id '${id}' not found`);
        }
        return car;
    }
    create( body:CreateCarDTO){
        const car = {
            id: uuid(),
            brand:body.brand,
            model:body.model
        }
        this.cars.push(car);
        return car;
    }
    update(body:UpdateCarDTO,id:string){
        
        let carDB= this.findOne(id);

        this.cars = this.cars.map(car=>{
            if ( car.id===id){
                carDB= {
                    ...car,
                    ...body,
                    id
                }
                return carDB
            }
            return car
        })

        return carDB;

    }

    delete(id:string){
        const car = this.findOne(id);
        this.cars = this.cars.filter(car=> car.id !== id);
    }

    fillCarsWithSeedData(cars:Car[]){
        this.cars=cars
    }
}
