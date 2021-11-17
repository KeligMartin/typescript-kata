import Hippopotamus from '../src/hippopotamus';
import Meat from '../src/food/meat';
import Vegetable from '../src/food/vegetable';
import Animal from '../src/animal.class';

describe("Hippopotamus", () => {

  let hippo: Hippopotamus;
  let meat: Meat;
  let vegetable: Vegetable;
  let animal: Animal;

  beforeEach(() => {
    hippo = new Hippopotamus("roger", 150)
    animal = new Animal("rabbit", 50)
    meat = new Meat("steak")
    vegetable = new Vegetable("watermelon")
  })

  test("hippopotamus should puke if he eats meat", () => {
    expect(hippo.eat(meat)).toBe("beurk")
  })

  test("hippopotamus should get bigger if he eats vegetable", () => {
    hippo.eat(vegetable)
    expect(hippo.weight).toBe(170)
  })

  test("hippopotamus should get smaller when he swims", () => {
    hippo.swim()
    expect(hippo.weight).toBe(100)
  })

  test("hippopotamus weight cant be negative he swims", () => {
    hippo.weight = 10
    hippo.swim()
    expect(hippo.weight).toBe(0)
  })

  test("hippopotamus should get smaller when he sleeps", () => {
    hippo.sleep()
    expect(hippo.weight).toBe(130)
  })

  test("hippopotamus weight cant be negative he sleeps", () => {
    hippo.weight = 10
    hippo.sleep()
    expect(hippo.weight).toBe(0)
  })

  test("animal should win 10 when he eats", () => {
    animal.eat(meat)
    expect(animal.weight).toBe(60)
  })

  test("animal should lose 10 when he sleeps", () => {
    animal.sleep()
    expect(animal.weight).toBe(40)
  })
})
