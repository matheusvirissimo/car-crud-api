import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {

    // injetamos o nosso serviço (provider) no controlador
    constructor(private carService: CarService) {}

    
    @Get()// decorador de GET("o que estiver em parenteses é o que deseja ser recuperado")
    //1° método - GET cars (pegar informação do carro)
    async getCars(){
        // o método tem que estar no car.service, que é onde ele vai chamar o método
        return this.carService.getCars();
    }
}
