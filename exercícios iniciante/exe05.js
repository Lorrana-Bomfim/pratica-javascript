/* Exercício 5 — Sistema de notas
 História
Uma escola precisa validar aprovação.
---
Regras
- média >= 7 → aprovado
- média entre 5 e 6.9 → recuperação
- abaixo de 5 → reprovado */
let name = "Lorrana"
let nota = 5.9
if (nota >= 7){
    console.log(name  +  " está APROVADO(A)")
} else if (nota >=5 && nota <6.9){
    console.log(name  +  " está em RECUPERAÇÃO")
} else {
    console.log (name  +  " está REPROVADO(A)")
}  
