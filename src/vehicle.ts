import { VehicleType } from './vehicletype.enum';

export default class Vehicle {
  type: VehicleType
  name: string

  constructor(type: VehicleType, name: string) {
    this.type = type
    this.name = name
  }

  // Coder une méthode nois qui switchera sur le type du véhicule et renverra
  // vrooooom si le vehicule est une voiture
  // bep bep si le vehicule est une moto
  // brrrrrrrrrrrrr si le vehicule est un camion
  // skrrrt skrrrt dans tout autre cas
  noise():string {
    switch (this.type) {
      case VehicleType.Car:
        return "vrooooom"
      case VehicleType.Moto:
        return "bep bep"
      case VehicleType.Truck:
        return "brrrrrrrrrrrrr"
      default:
        return "skrrrt skrrrt"
    }
  }

  // Coder un callback qui renverra la methode noise précedemment codée
  // mais transformera la valeur de retour en majuscule
  myCb = (): string => {
    return this.noise().toUpperCase();
  }

  // Coder une méthode accelerate qui prend en paramètre un callback et renvoie la valeur de noise() concaténée au callback
  accelerate(myCb: () => string):string {
    return  this.noise()+myCb();
  }


}
