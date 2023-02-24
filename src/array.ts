export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]) {
    let oddNumbers = arr.filter((number) => number % 2 === 1)
    return oddNumbers
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    let sortedArray = arr.sort((a, b) => a - b)
    return sortedArray
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) {
    let sameLength = arr.every((string) => string.length === arr[0].length)
    return sameLength ? true : "relou ta fonction"
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]) {
    return a.every((number, index) => number === b[index]) && (c ? a.every((number, index) => number === c[index]) : true)
  }
}
