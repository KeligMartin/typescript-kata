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
  noise(): string {
    if (this.type == VehicleType.Car) {
      return "vrooooom";
    }
    else if (this.type == VehicleType.Moto) {
      return "bep bep";
    }
    else if (this.type == VehicleType.Truck) {
      return "brrrrrrrrrrrrr";
    }
    else {
      return "skrrrt skrrrt";
    }
  }

  // Coder un callback qui renverra la methode noise précedemment codée
  // mais transformera la valeur de retour en majuscule
  myCb = () => {
    return this.noise().toUpperCase();
  }

  // Coder une méthode accelerate qui prend en paramètre un callback et renvoie la valeur de noise() concaténée au callback
  accelerate(cb: () => string) {
    let noise = this.noise();
    return noise.concat(this.myCb().toString());
  }


}
