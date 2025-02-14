import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {

    // injetamos o nosso serviço (provider) no controlador
    constructor(private carService: CarService) {}

    
    @Get()// decorador de GET("o que estiver em parenteses é o que deseja ser recuperado")
    //1° método - GET cars (pegar informação do carro)
    public getCars(){
        // o método tem que estar no car.service, que é onde ele vai chamar o método
        return this.carService.getCars();
    }

    @Post() // envia o dado
    public postCar(@Body() car: CarDto){
        return this.carService.postCar(car)
    }


    @Get(':id') // recupera o dado
    public async getCarById(@Param('id') id: number){ // @Param é um decorator para acessar os parâmetros do método
        // repare que o carService é um objeto que possui os métodos do service nele
        const result = await this.carService.getCarById(id)
        return result
    }

    @Delete(':id') // deleta o dado
    public async deleteCarById(@Param('id') id: number){
        return this.carService.deleteCarById(id);
    }

    @Put(':id') // atualiza o dado
    // decorator @Query é para capturar parâmetros de consulta (filtragem, paginação, ordenação)
    public async putCarById(@Param('id') id: number, @Query() query){
        const propertyName = query.property_name
        const propertyValue = query.property_value

        return this.carService.putCarById(id, propertyName, propertyValue)
    }
}
