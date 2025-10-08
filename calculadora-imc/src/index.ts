import { ImcCalculator } from "./imcCalculator";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso em kg: ", (pesoStr) => {
  rl.question("Digite sua altura em metros: ", (alturaStr) => {
    const peso = parseFloat(pesoStr);
    const altura = parseFloat(alturaStr);

    try {
      const resultado = ImcCalculator.calcular(peso, altura);
      console.log(`Seu IMC é classificado como: ${resultado}`);
    } catch (error: any) {
      console.error("Erro:", error.message);
    }

    rl.close();
  });
});
