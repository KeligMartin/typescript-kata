import Vehicle from '../src/vehicle';
import { VehicleType } from '../src/vehicletype.enum';

describe("Vehicle", () => {

  let vehicle: Vehicle

  beforeEach(() => {
    vehicle = new Vehicle(VehicleType.Car, "peugeot")
  })

  test("car should say vroooom", () => {
    expect(vehicle.noise()).toBe("vrooooom")
  })

  test("moto should say bep bep", () => {
    vehicle.type = VehicleType.Moto
    expect(vehicle.noise()).toBe("bep bep")
  })

  test("truck should say brrrrrrrrrrrrr", () => {
    vehicle.type = VehicleType.Truck
    expect(vehicle.noise()).toBe("brrrrrrrrrrrrr")
  })

  test("any other vehicle should say skrrrt skrrrt", () => {
    vehicle.type = VehicleType.Rocket
    expect(vehicle.noise()).toBe("skrrrt skrrrt")
  })

  test("started car should make more noise", () => {
    expect(vehicle.myCb()).toBe("VROOOOOM")
  })

  test("started moto should make more noise", () => {
    vehicle.type = VehicleType.Moto
    expect(vehicle.myCb()).toBe("BEP BEP")
  })

  test("started truck should make more noise", () => {
    vehicle.type = VehicleType.Truck
    expect(vehicle.myCb()).toBe("BRRRRRRRRRRRRR")
  })

  test("started rocket should make more noise", () => {
    vehicle.type = VehicleType.Rocket
    expect(vehicle.myCb()).toBe("SKRRRT SKRRRT")
  })

  test("started car should make even more noise when accelerate", () => {
    expect(vehicle.accelerate(vehicle.myCb)).toBe("vrooooomVROOOOOM")
  })

  test("started moto should make even more noise when accelerate", () => {
    vehicle.type = VehicleType.Moto
    expect(vehicle.accelerate(vehicle.myCb)).toBe("bep bepBEP BEP")
  })

  test("started truck should make even more noise when accelerate", () => {
    vehicle.type = VehicleType.Truck
    expect(vehicle.accelerate(vehicle.myCb)).toBe("brrrrrrrrrrrrrBRRRRRRRRRRRRR")
  })

  test("started rocket should make even more noise when accelerate", () => {
    vehicle.type = VehicleType.Rocket
    expect(vehicle.accelerate(vehicle.myCb)).toBe("skrrrt skrrrtSKRRRT SKRRRT")
  })
})
