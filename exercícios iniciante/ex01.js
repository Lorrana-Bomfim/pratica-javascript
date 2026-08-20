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


