const btn_num = document.querySelectorAll(".numero");
const painel = document.getElementById("painel");
const btn_op = document.querySelectorAll(".operador");
const btn_igual = document.getElementById("igual");
const btn_apagar = document.getElementById("apagar");

btn_num.forEach(button => {
    button.addEventListener('click', () => {
        painel.textContent += button.textContent;
    })
})

btn_op.forEach(button => {
    button.addEventListener('click', () => {
        painel.textContent += button.textContent;
    })
})

function calcularExpressao(expressao) {
    if (!validarExpressao(expressao)) {
        return 'Erro: Expressão contém caracteres inválidos \n(somente números e operadores são permitidos).';
    }

    try {
        return new Function('return ' + expressao)();
    } catch (e) {
        return 'Erro de Sintaxe';
    }
}

function validarExpressao(expressao) {
    const regex = /^[\d.+\-*/\s]+$/;

    if (!regex.test(expressao)) {
        return false;
    }
    
    return true;
}

btn_apagar.addEventListener('click', () => {
        painel.textContent = "";
    })

btn_igual.addEventListener('click', () => {
    const expressaoAtual = painel.textContent.trim();
    
    if (expressaoAtual === '') {
        painel.textContent = '0';
        return;
    }

    const resultado = calcularExpressao(expressaoAtual);

    painel.textContent = resultado;
})