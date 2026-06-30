let v1 = document.getElementById('val1')
let v2 = document.getElementById('val2')
let oper = document.getElementById('operacao')
let res = document.getElementById('resposta')

function verificar() {
    // Verifica se os campos estão vazios
    if (v1.value.trim() === '' || v2.value.trim() === '') {
        alert('[ERRO] Informe os dois valores!')
        v1.focus()
        return true
    }

    // Verifica se foi selecionada uma operação
    if (oper.value === '') {
        alert('[ERRO] Selecione uma operação!')
        oper.focus()
        return true
    }
    return false
}

function calcular() {
    if (verificar()) {
        return
    }
    let valor1 = Number(v1.value)
    let valor2 = Number(v2.value)
    let op = Number(oper.value)
    let calculo
    let nomeOperacao
    switch (op) {
        case 1:
            calculo = valor1 + valor2
            nomeOperacao = "Soma"
            break;
        case 2:
            calculo = valor1 - valor2
            nomeOperacao = "Subtração"
            break;
        case 3:
            calculo = valor1 * valor2
            nomeOperacao = "Multiplicação"
            break;
        case 4:
            if (valor2 === 0) {
                res.innerHTML = '<p><strong>Erro:</strong> Não é possível dividir por zero.</p>'
                v2.focus()
                return
            }

            calculo = valor1 / valor2
            nomeOperacao = 'Divisão'

            // Exibe duas casas decimais apenas na divisão
            calculo = calculo.toFixed(2)
            break;
        default:
            res.innerHTML = '[ERRO] Operação inválida.'
            return
    }

    res.innerHTML = `
        <p>Operação:<strong> ${nomeOperacao} </strong><hr></p>
        <p>Primeiro valor:<strong> ${valor1} </strong></p>
        <p>Segundo valor:<strong> ${valor2}</strong></p>
        <p>Resultado:<strong> ${calculo} </strong></p>
    `
}

