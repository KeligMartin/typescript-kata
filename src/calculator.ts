export default class MyCalculator {

  // Coder une methode add qui prend 2 nombres en paramètre et renvoie la somme des deux
  add(a: number, b: number): number {
    return a + b
  }

  // Coder une methode subtract qui prend 2 nombres en paramètre et renvoie la différence des deux
  subtract(a: number, b: number): number {
    return a - b
  }

  // Coder une methode multiply qui prend 2 nombres en paramètre et renvoie le produit des deux
  multiply(a: number, b: number): number {
    return a * b
  }

  // Coder une methode divide qui prend 2 nombres en paramètre et renvoie le quotient des deux
  divide(a: number, b: number): number {
    if (a == 0 || b == 0)
      return 0
    else
      return a / b
  }

  // Coder une méthode power qui prend 2 nombres en paramètre et renvoie le premier élevé à la puissance de l'autre
  power(a: number, b: number): number {
    return Math.pow(a, b);
  }

  // Coder une méthode squareRoot qui prend un nombre en paramètre et renvoie sa racine carrée
  squareRoot(a: number): number {
    if (a >= 0)
      return Math.sqrt(a)
    else
      return 0
  }

  // Coder une fonction fléchée qui renvoie true si le chiffre en paramètre est premier, false sinon
  isPrime = (a: number): Boolean => {
    if (a <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        return false
      }
    }
    return true;
  }
}
