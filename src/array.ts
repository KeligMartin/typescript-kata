export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]): Array<number> {
    return arr.filter(arr => arr % 2 !== 0);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): Array<number> {
    return arr.sort((a, b) => a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): Boolean | string {
    if (arr.every(strings => strings.length == arr[0].length))
      return true
    else return 'relou ta fonction'
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a: number[], b: number[], c?: number[]): Boolean {
    let result = a.every((el, i) => el == b[i])

    if (!c) {
      return result
    }
    else {
      if (!result) {
        return false
      } else {
        return c.every((el, i) => el == b[i])
      }
    }
  }
}
