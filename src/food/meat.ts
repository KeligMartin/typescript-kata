import Food from './food';

export default class Meat extends Food{

  constructor(name: string) {
    super(name);
  }

  isVegan(): boolean {
    return false;
  }

}
