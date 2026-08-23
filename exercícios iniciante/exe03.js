/* Exercício 3 — Controle de estoque
 História
Uma autopeças quer avisar quando o estoque estiver baixo.
---
 Objetivo
Crie:
- nomeProduto
- quantidade
Regras:
- menor que 5 → “Estoque baixo”
- igual 0 → “Produto sem estoque” */
let nomeProduto = "Amortecedor NAKATA"
let quantidade = 0
if (quantidade == 0){
    console.log(nomeProduto + " sem estoque!")
}else if (quantidade >0 && quantidade <5){
    console.log (nomeProduto + " com estoque baixo!")
}else {
    console.log ("Estoque está OK!")
}
