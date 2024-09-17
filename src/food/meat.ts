import Food from './food';

export default class Meat extends Food{
  public constructor(name: string) {
    super(name);
  }

  public isVegan(): boolean {
    return false;
  }

}
