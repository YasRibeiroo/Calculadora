export class ImcCalculator {
  static calcular(peso: number, altura: number): string {
    if (peso <= 0 || altura <= 0) {
      throw new Error("Peso e altura devem ser maiores que zero.");
    }

    const imc = peso / (altura * altura);

    if (imc < 18.5) return "Magreza";
    if (imc < 24.9) return "Normal";
    if (imc < 29.9) return "Sobrepeso";
    return "Obesidade";
  }
}
