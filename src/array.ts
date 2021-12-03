export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]):any {
    return arr.filter(num =>
    num % 2 != 0
     )
    
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]): number[] {
    let res: number [] =  arr;
     res.sort(function(a, b){return a -b});
     return res;}
   

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]) : boolean|string{
    if(arr.every(el=>el.length == arr[0].length))
    return true
  else return 'relou ta fonction'
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a:number[], b:number[], c?: number[]): boolean {
    let result = a.every((el,i)=> el == b[i])
    if(!c){
      return result
    }
    else{
      if(!result){
        return false
      }else{
        return c.every((el,i)=> el == b[i])
      }
    }
  
  
}
}
