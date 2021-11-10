import Food from './food';

export default class Vegetable extends Food{

  constructor(name: string) {
    super(name);
  }

  isVegan(): boolean {
    return true;
  }
}
