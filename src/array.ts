export default class MyArray {
  // Méthode oddNumbers
  oddNumbers(arr: number[]): number[] {
    return arr.filter((num) => num % 2 !== 0);
  }

  // Méthode sort
  sort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }

  // Méthode boringFunction
  boringFunction(arr: string[]): boolean | string {
    const len = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length !== len) {
        return 'relou ta fonction';
      }
    }
    return true;
  }

  // Méthode optionalArray
  optionalArray(a: number[], b: number[], c?: number[]): boolean {
    if (c) {
      return this.arraysEqual(a, b) && this.arraysEqual(b, c);
    }
    return this.arraysEqual(a, b);
  }

  // Méthode utilitaire pour vérifier l'égalité de deux tableaux
  private arraysEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}
