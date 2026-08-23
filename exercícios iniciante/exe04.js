/* Exercício 4 — Calculadora de combustível
História
Um motorista de aplicativo quer calcular gasto de viagem.
---
Objetivo
Receber:
- distância
- consumo do carro
- preço gasolina
Calcular:
- litros usados
- valor gasto */
let distancia = 380
let consumo = 15
let precogaso = 6
let litros = distancia/consumo
    console.log(`Litros necessário: ${litros}`)
let gasto = litros * precogaso
    console.log (`O gasto total é: R$${gasto.toFixed(2)}`)
