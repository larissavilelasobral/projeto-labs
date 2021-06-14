var nome = prompt("Bem Vindo! Esse é o quiz sobre a Laboratória! Qual o seu nome?");

var condi = confirm("Olá " + nome + " deseja continuar com o quiz?"); 

var resposta1_certa = document.getElementById('primeiro_certo')
var resposta1_errada = document.getElementById('primeiro_errado')

var resposta2_certa = document.getElementById('segundo_certo')
var resposta2_errada = document.getElementById('segundo_errado')

var resposta3_certa = document.getElementById('terceiro_certo')
var resposta3_errada = document.getElementById('terceiro_errado')

var footerFim = document.getElementById('fim')
var nomeInicio = document.getElementById('inicialNome')

nomeInicio.textContent = (nome)

if (condi == true) {
   
    let pergunta1 = prompt ("Em que ano a laboratória começou a formar mulheres? \n 1. 2014 \n 2. 2008 \n 3. 2017 \n digite o numero correto:")
        
        if (pergunta1 == '1') {
            resposta1_certa.textContent = 'Primeira Resposta Certa (2014)'
        } else {
            resposta1_errada.textContent = 'Primeira Resposta Errada'
        }
    //1 Certa
    //2
    //3

    let pergunta2 = prompt ("Quantas graduadas? \n 1. 1.000 \n 2. 1.800 \n 3. 2.000 \n digite o numero correto:")
        
        if (pergunta2 == '2') {
            resposta2_certa.textContent = 'Segunda Resposta Certa (1.800)'
        } else {
            resposta2_errada.textContent = 'Segunda Resposta Errada'
        }
    //1
    //2 certa
    //3

    let pergunta3 = prompt ("Em quantos paises tem uma cede da Laboratória? \n 1.Cinco \n 2.Um \n 3.Seis \n digite o numero correto:")
        if (pergunta3 == '3') {
            resposta3_certa.textContent = 'Terceira Resposta Certa (6)'
        } else {
            resposta3_errada.textContent = 'Terceira Resposta Errada'
        }
    //1
    //2
    //3 Certa
} else {
    footerFim.textContent = (`Obrigado! ${nome} Encerramos o Quiz!`)
}