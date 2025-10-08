# CALCULADORA DE IMC

### Uma aplicação simples em **TypeScript** que calcula o **Índice de Massa Corporal (IMC)** e classifica o resultado em categorias de acordo com a Organização Mundial da Saúde (OMS).

# Como executar o projeto

## 1️⃣ Instalar dependências

```bash
npm install
```

## 2️⃣ Executar a aplicação

```bash
npm run build
node dist/index.js
```

## 3️⃣ Executar os testes

```bash
npm test
```

## 4️⃣ Gerar relatório de cobertura

```bash
npm run test:coverage
```

# REGRAS DE NEGÓCIO

- O sistema deve calcular corretamente o IMC usando a fórmula peso / (altura²).
    - Todos os testes
- O sistema deve classificar o IMC conforme a faixa de valores: Magreza, Normal, Sobrepeso, Obesidade.
    - Testes 1 a 4
- O sistema não deve aceitar valores de peso ou altura menores ou iguais a zero.
    - Testes 5 e 6
- O sistema deve lançar uma exceção se dados inválidos forem informados.
    - Testes 5 e 6

# Exemplo de uso

```yaml
Digite seu peso em kg: 70
Digite sua altura em metros: 1.75
Seu IMC é classificado como: Normal
```

# Dependencias

Node.js

TypeScript

Jest para testes unitários

ts-jest para integração entre Jest e TypeScript