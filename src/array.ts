export default class MyArray {
  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  public oddNumbers(arr: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  public compare(x: number, y: number): number {
    return x - y;
  }
  public sort(arr: number[]): number[] {
    return arr.sort(this.compare);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  public boringFunction(arr: string[]): boolean | string {
    return arr.every((s: string) => s.length === arr[0].length) ? true : 'relou ta fonction';
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  public optionalArray(a: number[], b: number[], c?: number[]): boolean {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
      if (c) {
        if (a[i] !== b[i] && a[i] !== c[i]) {
          return false;
        }
      }
    }
    return true;
  }
}
