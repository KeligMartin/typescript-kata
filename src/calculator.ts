export default class MyCalculator {
  // Coder une methode add qui prend 2 nombres en paramètre et renvoie la somme des deux
  add(a: number, b: number) {
    return a + b;
  }

  // Coder une methode subtract qui prend 2 nombres en paramètre et renvoie la différence des deux
  subtract(a: number, b: number) {
    return a - b;
  }

  // Coder une methode multiply qui prend 2 nombres en paramètre et renvoie le produit des deux
  multiply(a: number, b: number) {
    return a * b;
  }

  // Coder une methode divide qui prend 2 nombres en paramètre et renvoie le quotient des deux
  divide(a: number, b: number) {
    if (b === 0) {
      return 0;
    }
    return a / b;
  }

  // Coder une méthode power qui prend 2 nombres en paramètre et renvoie le premier élevé à la puissance de l'autre
  power(a: number, b: number) {
    return a ** b;
  }

  // Coder une méthode squareRoot qui prend un nombre en paramètre et renvoie sa racine carrée
  squareRoot(a: number) {
    if (a < 0) {
      return 0;
    }
    return Math.sqrt(a);
  }

  // Coder une fonction fléchée qui renvoie true si le chiffre en paramètre est premier, false sinon
  isPrime = (a: number) => {
    return a > 1 && Array.from({ length: a }, (_, i) => i + 1).filter((el) => a % el === 0).length === 2;
  };
}
