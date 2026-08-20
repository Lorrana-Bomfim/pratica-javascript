/*# Exercício 1 — Sistema de desconto de loja

História: Você foi contratado por uma pequena loja online,o dono quer automatizar descontos:

- compras acima de R$100 → 10%
- compras acima de R$200 → 20%

---
Objetivo
- calcule o desconto
- mostre:
    - valor original
    - desconto
    - valor final*/

let valorcompra = 90
let desconto = 0
let valorfinal = 0 
if (valorcompra >200) {
     desconto = (valorcompra * 30)/100
    valorfinal = (valorcompra - desconto)
    console.log ("Valor compra:" + valorcompra)
    console.log ("Valor final é de:" + valorfinal)
} else if (valorcompra >100){
    desconto = (valorcompra * 10)/100
    valorfinal = (valorcompra - desconto)
    console.log ("Valor compra é:" + valorcompra)
    console.log ("Valor final é:" + valorfinal)
} else {
    console.log ("Infelizmesnte não tem desconto, o valor da sua compra ficara:" + valorcompra)
}


