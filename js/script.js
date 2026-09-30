let v1 = document.getElementById('i_val1')
let v2 = document.getElementById('i_val2')
let oper = document.getElementById('oper')
let res = document.getElementById('resp')

function verificar() {
    // Verifica se os campos estão vazios
    if (
        v1.value === '' || 
        v2.value === ''
    ) {
        alert('[ERRO] Informe os dois valores!')
        v1.focus()
        return true
    }

    // Verifica se foi selecionada uma operação
    if (oper.value === '') {
        alert('[ERRO] Selecione uma operação!')
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
    switch (op) {
        case 1:
            calculo = valor1 + valor2
            break;
        case 2:
            calculo = valor1 - valor2
            break;
        case 3:
            calculo = valor1 * valor2
            break;
        case 4:
            if (valor2 === 0) {
                res.innerHTML = '<p><strong>Erro:</strong> Não é possível dividir por zero.</p>'
                v2.focus()
                return
            }
            calculo = valor1 / valor2
            // Exibe duas casas decimais apenas na divisão
            calculo = calculo.toFixed(2)
            break;
        default:
            res.innerHTML = '[ERRO] Operação inválida.'
            return
    }

    res.innerHTML = `
        <p>Resultado:<strong> ${calculo} </strong></p>
    `
}

