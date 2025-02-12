import { Injectable } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable() // todo serviço criado, deve ter esse decorador pra saber que ele pode ser inserido
export class CarService {
    private cars = CARS

    // método é público porque não é uma subclasse que está acessando ela (falta de encapsulamento)
    public async getCars(){
        return this.cars;
    }
}
