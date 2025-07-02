let v1 = document.getElementById('val1')
let v2 = document.getElementById('val2')
let res = document.getElementById('resposta')
let oper = document.getElementById('operacao')
let calculo = undefined

function verificar() {
    if (v1.value.length == 0 || v2.value.length == 0) {
        window.alert('[ERRO] Informe os Valores!')
        window.location.reload()
    }
}

function calcular() {
    verificar()
    let valor1 = Number(v1.value)
    let valor2 = Number(v2.value)
    let op = Number(oper.value)
    switch (op) {
        case 1:
            calculo = valor1 + valor2
            res.innerHTML = `A Soma entre os valores ${valor1} e ${valor2} <br>
            Corresponde a: <strong>${calculo}</strong>`
            break;
        case 2:
            calculo = valor1 - valor2
            res.innerHTML = `A Subtração entre os valores ${valor1} e ${valor2} <br>
            Corresponde a: <strong>${calculo}</strong>`
            break;
        case 3:
            calculo = valor1 * valor2
            res.innerHTML = `A Multiplicação entre os valores ${valor1} e ${valor2} <br>
            Corresponde a: <strong>${calculo}</strong>`
            break;
        case 4:
            calculo = valor1 / valor2
            res.innerHTML = `A Divisão entre os valores ${valor1} e ${valor2} <br>
            Corresponde a: <strong>${calculo}</strong>`
            break;
        default:
            res.innerHTML = '[ERRO] Valor Inválido'
            break;
    }
}

