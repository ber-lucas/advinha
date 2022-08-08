const elementResposta = document.querySelector("#respostas")
const elementPergunta = document.querySelector("#inputElement")
const elementButton = document.querySelector("#buttonPerguntar")
const resposta = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
]

const apertaBotao = () => {
    //Verifica se o input possui alguma pergunta ao apertar o button
    if(elementPergunta.value == "") {
        alert("Digite uma pergunta.")
        return
    }

    //Desabilitar button para não ocorrer múltiplos cliques
    elementButton.setAttribute("disabled", true)
    
    //Adicionando uma div com js para armazenar a pergunta
    const pergunta = "<div>" + elementPergunta.value + "</div>"
    
    //Gerar numero aleatorio para escolha das respostas
    const tamRespostas = resposta.length
    const numAleatorio = Math.floor(Math.random() * tamRespostas)
    
    //Fazer o elemento aparecer
    elementResposta.innerHTML = pergunta + resposta[numAleatorio]

    //Mostrando texto escondido mais embaixo
    elementResposta.style.opacity = 1

    //Function para executar outra function passado um tempo
    setTimeout(() => {
        //Escondendo texto depois de 3s
        elementResposta.style.opacity = 0
        //Habilitando button de novo para proximo uso
        elementButton.removeAttribute("disabled")
    }, 3000)
}
