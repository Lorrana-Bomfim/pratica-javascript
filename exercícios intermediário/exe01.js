/* Exercício 6 — Lista de clientes
Uma estética automotiva quer listar clientes cadastrados.
---
Objetivo
Crie um array de objetos:

Mostre:
- todos os clientes
- total faturado */
let faturamento = 0
let clientes = [
    {
        nome: "Robson",
        servico: "Lavagem do motor",
        valor: 250
    },
    {
        nome: "Renato",
        servico: "Polimento",
        valor: 400
    },
    {
        nome: "Lucas",
        servico: "Lavagem interna e externa",
        valor: 100
    }
]

for (let indice = 0; indice < clientes.length; indice++){
    console.log (`${clientes[indice].nome} - ${clientes[indice].servico} - R$${clientes[indice].valor}`)
    
    faturamento = faturamento + clientes[indice].valor
}
console.log (`O total faturado é R$${faturamento}`)
