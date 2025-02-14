import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './car.mock';

// Lógica de negócio fica em services
@Injectable() // todo serviço criado, deve ter esse decorador pra saber que ele pode ser inserido
export class CarService {
    private cars = CARS

    // método é público porque não é uma subclasse que está acessando ela (falta de encapsulamento)
    public getCars(){
        return this.cars;
    }

    // método para adicionar carros a nossa api
    public postCar(car){
        return this.cars.push(car); // função que adiciona algo a lista
    }


    // Métodos que usam "id" para realizar algo

    // Vamos achar o carro pelo id dele (por ser tipado, tem que indicar o tipo da variável)
    public getCarById(id: number): Promise<any>{
        // A constante carro será igual ao que for encontrado pelo id
        const carId = Number(id);
        
        return new Promise((resolve) =>{
            const car = this.cars.find((car) => car.id === carId);
            if(!car){
                throw new HttpException("Not found", 404); // se o carro não for encontrado joga um erro
            }
            return resolve(car);

        });
    }

    public deleteCarById(id: number): Promise<any>{
        const carId = Number(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);
            if(index === -1){ // não encontrado
                throw new HttpException("Not found", 404);
            }

            this.cars.splice(index, 1); // função que remove algo. semelhante ao pop
            
            return resolve(this.cars); // retorna o array com o carro removido
        })
    }

    public putCarById(
        id: number, 
        propertyName: string, 
        propertyValue: string
    ): Promise<any>{
        const carId = Number(id);

        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);
        
            if(index === -1){
                throw new HttpException("Teste", 404)
            }

            // adiciona o carro na devida posição com os devidos valores atualizados
            this.cars[index][propertyName] = propertyValue;
            return resolve(this.cars);
        })

    
    }
}
