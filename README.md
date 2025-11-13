# calculadora
Este projeto é uma calculadora básica desenvolvida usando JavaScript para a lógica, HTML para a estrutura e CSS para a estilização. Ela permite a inserção de números e operadores para realizar operações matemáticas simples.

## 🛠️ Tecnologias Utilizadas
O projeto foi construído com as seguintes tecnologias front-end:  
**HTML5**: Utilizado para criar a estrutura do corpo da calculadora e seus botões.  
**CSS3**: Responsável pela estilização e layout da interface.  
**JavaScript**: Implementa toda a lógica de manipulação do painel, coleta de entrada e cálculo das expressões.  

## 🚀 Instalação e Execução  
Como este é um projeto front-end, ele pode ser executado diretamente em qualquer navegador moderno.  
**Pré-requisitos**  
Para rodar o projeto, você só precisa de um navegador moderno que suporte HTML5, CSS3 e JavaScript.  
**Passos para Iniciar**  
1. Clone o repositório para a sua máquina local  
2. Navegue até a pasta do projeto  
3. Abra o arquivo index.html diretamente no seu navegador  

## 💻 Funcionalidades e Lógica  
A calculadora interage com o DOM manipulando o visor para exibir a expressão e o resultado.  
Principais Ações:  
Ação - Descrição  
- Inserção Números - Anexa o valor do botão ao conteúdo do painel.  
- Limpar - Limpa o visor, resetando painel para vazio.  
- Calcular - Inicia o processo de valiação da expressão.  

## 🧠 Lógica JavaScript Implementada  
A lógica principal está centralizada nas funções de cálculo e validação:  
- **calcularExpressao(expressao):**  
  - Execução Dinâmica: Utiliza a função new Function('return ' + expressao)() para avaliar a string da expressão matemática. Este método transforma a string em código JavaScript executável, permitindo o cálculo.  
  - Tratamento de Erros: Inclui um bloco try...catch para capturar Erro de Sintaxe.  
  - Segurança Básica: Usa uma Expressão Regular (const regex = /^[\d.+\-*/\s]+$/;) para garantir que a string da expressão contenha somente números (\d), ponto decimal (.), operadores básicos (+, -, *, /) e espaços (\s). Qualquer outro caractere resulta em um erro de validação.  
- **btn_igual.addEventListener:** Ao ser clicado, coleta a expressão, verifica se está vazia e, em seguida, chama calcularExpressao. O resultado do cálculo é então exibido no painel.  
