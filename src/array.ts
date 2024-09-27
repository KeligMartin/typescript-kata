export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]):number[] {
    let arrTemp = new Array();

    arr.forEach(value => {
      if (value%2==1) {
        arrTemp.push(value);
      }
    });

    return arrTemp
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]):number[] {
    return arr.sort((a, b)=> a - b);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]):boolean | string {
    let lenght:number = arr[0].length;
    let continu: boolean= true;

    arr.forEach(value => {
      if (value.length != lenght) {
        continu =false;
      }
    });

    return (continu ? true:  "relou ta fonction");
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel

  optionalArray(a: number[],b: number[],c?: number[]):boolean{
    let continu: boolean = true;

    if (a.length == b.length){
      for (let index = 0; index < a.length; index++) {
        if (a[index] != b[index]){
          return false
        }
      }
    }else{
      continu = false;
    }

    if (c != undefined) {

        if (a.length == c.length){
          for (let index = 0; index < a.length; index++) {
            if (a[index] != c[index]){
              return false
            }
          }
        }else{
          continu = false;
        }

    }
    
    return continu;
  }

}
