function calcular() {
    let v1 = document.getElementById('val1')
    let v2 = document.getElementById('val2')
    let res = document.getElementById('resposta')
    let valor1 = Number(v1.value)
    let valor2 = Number(v2.value)
    if (v1.value.length == 0 || v2.value.length == 0) {
        return window.alert('[ERRO] Informe os Valores!')
    }
    let soma = valor1 + valor2
    let sub = valor1 - valor2
    let multp = valor1 * valor2
    let div = valor1 / valor2
    let operacao = document.getElementById('operacao')
    let op = Number(operacao.value)
    switch (op) {
        case 1:
            res.innerHTML = `A soma entre ${valor1} e ${valor2} é <strong>${soma}</strong>`
            break;
        case 2:
            res.innerHTML = `A Subtração entre ${valor1} e ${valor2} é <strong>${sub}</strong>`
            break;
        case 3:
            res.innerHTML = `A Multiplicação entre ${valor1} e ${valor2} é <strong>${multp}</strong>`
            break;
        case 4:
            res.innerHTML = `A Divisão entre ${valor1} e ${valor2} é <strong>${div}</strong>`
            break;
        default:
            res.innerHTML = 'Valor Invalido'
            break;
    }
}

