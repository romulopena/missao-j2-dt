const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta1",
        alternativas: [
            "alternativa1", "alternativa2"
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: [
            "alternativa1", "alternativa2"
        ]
    },
    {
        enunciado: "Pergunta3",
        alternativas: [
            "alternativa1", "alternativa2"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();