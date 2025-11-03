const btn_num = document.querySelectorAll(".numero");
const painel = document.getElementById("painel");




btn_num.forEach(button => {
    button.addEventListener('click', () => {
        painel.textContent += button.textContent;
    })
})

