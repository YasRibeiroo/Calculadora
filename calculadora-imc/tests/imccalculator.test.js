"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imcCalculator_1 = require("../src/imcCalculator");
describe("Calculadora de IMC", () => {
    test("Deve retornar 'Magreza' para IMC abaixo de 18.5", () => {
        expect(imcCalculator_1.ImcCalculator.calcular(50, 1.8)).toBe("Magreza");
    });
    test("Deve retornar 'Normal' para IMC entre 18.5 e 24.9", () => {
        expect(imcCalculator_1.ImcCalculator.calcular(68, 1.75)).toBe("Normal");
    });
    test("Deve retornar 'Sobrepeso' para IMC entre 25 e 29.9", () => {
        expect(imcCalculator_1.ImcCalculator.calcular(80, 1.75)).toBe("Sobrepeso");
    });
    test("Deve retornar 'Obesidade' para IMC acima de 30", () => {
        expect(imcCalculator_1.ImcCalculator.calcular(100, 1.7)).toBe("Obesidade");
    });
    test("Deve lançar erro se peso for menor ou igual a zero", () => {
        expect(() => imcCalculator_1.ImcCalculator.calcular(0, 1.75)).toThrow("Peso e altura devem ser maiores que zero.");
    });
    test("Deve lançar erro se altura for menor ou igual a zero", () => {
        expect(() => imcCalculator_1.ImcCalculator.calcular(70, 0)).toThrow("Peso e altura devem ser maiores que zero.");
    });
    test("Deve lançar erro se peso for negativo", () => {
        expect(() => imcCalculator_1.ImcCalculator.calcular(-5, 1.75)).toThrow("Peso e altura devem ser maiores que zero.");
    });
    test("Deve lançar erro se altura for negativa", () => {
        expect(() => imcCalculator_1.ImcCalculator.calcular(70, -1.6)).toThrow("Peso e altura devem ser maiores que zero.");
    });
});
