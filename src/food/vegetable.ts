import Food from './food';

export default class Vegetable extends Food{
  public constructor(name: string) {
    super(name);
  }

  public isVegan(): boolean {
    return true;
  }
}
