/*Exercício 7 — Filtro de pedidos
 História

Um e-commerce precisa separar pedidos pagos.

---

Objetivo

Filtrar:

- apenas pedidos com `status = "pago"`
- faturamento dos produtos que já estão pagos */
let faturamento = 0
let pedido = [
    {
        cliente: "Pedro",
        produto: "Camiseta",
        valor: 100,
        status:  "Não pago"
    } ,
    {
        cliente: "Maria",
        produto: "Sandalia",
        valor: 90,
        status: "Pago"
    },
    {
        cliente: "Camila",
        produto: "Colar",
        valor: 30,
        status: "Pago"
    },
    {
        cliente: "Jennifer",
        produto: "Moletom",
        valor: 150,
        status: "Pago"
    },
    {
        cliente: "Robson",
        produto: "Carteira",
        valor: 20,
        status: "Não pago "
    }

]

for (let indice = 0; indice < pedido.length; indice++){
    if (pedido[indice].status === "Pago") {
        console.log(`Esses são os pedidos pagos: ${pedido[indice].cliente}, ${pedido[indice].produto}, ${pedido[indice].valor}` )
         faturamento = faturamento + pedido[indice].valor
    }
}
console.log (`O total faturado até agora é: R$${faturamento}`)
