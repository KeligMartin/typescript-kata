import MyArray from '../src/array';

describe("Array", () => {

  let array: MyArray = new MyArray();

  test("should return only odd numbers", () => {
    expect(array.oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([1, 3, 5, 7, 9]);
  })

  test("should sort array", () => {
    expect(array.sort([1, 245, 13, 934, 6, 76, 343, 1391, 1839]))
      .toStrictEqual([1, 6, 13, 76, 245,343, 934, 1391, 1839]);
  })

  test("should return true if array items are the same length", () => {
    expect(array.boringFunction(["hihi", "haha", "hoho"])).toBe(true)
  })

  test("should return relou ta fonction if array items are not the same length", () => {
    expect(array.boringFunction(["cc", "les", "devs"])).toBe("relou ta fonction")
  })

  test("should return true when 2 arrays are equals", () => {
    expect(array.optionalArray([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  test("should return false when 2 arrays are not equals", () => {
    expect(array.optionalArray([1, 2, 3], [1, 2, 4])).toBe(false)
  })

  test("should return true when 3 arrays are equals", () => {
    expect(array.optionalArray([1, 2, 3], [1, 2, 3], [1, 2, 3])).toBe(true)
  })

  test("should return false when 2 in 3 arrays are not equals", () => {
    expect(array.optionalArray([1, 2, 3], [1, 2, 4], [1, 2, 3])).toBe(false)
  })

})
