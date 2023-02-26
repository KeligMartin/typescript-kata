export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier

  oddNumbers(arr: number[]) {
    return arr.filter((nombre) => nombre%2 !== 0);
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]) {
    return arr.sort((chiffre1, chiffre2) => chiffre1 - chiffre2);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) : true | "relou ta fonction" {
		let memeLongueur = true;
		let i = 0;
		while (i< arr.length) {
			if (arr[0].length !== arr[i].length) {
				memeLongueur = false;
			}
			i++;
		}
    return !memeLongueur ? "relou ta fonction" : true;
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a:number[], b:number[], c?:number[]):boolean {
		if (a.length !== b.length || !a.every((value, key) => value === b[key])) {
			return false;
		} if (c) {
			if (c.length !== a.length || !c.every((value, key) => value === a[key])) {
				return false;
			}
		}
		return true;
	}
}
