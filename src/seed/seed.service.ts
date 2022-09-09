import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor( private readonly carsService:CarsService){
   
  }

  populateDB(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    return 'JIJIJA'
  }
}
