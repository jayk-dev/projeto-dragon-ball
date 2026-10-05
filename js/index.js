const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        removeSelecaoDoBotao();
        selecionaBotao(botao);

        removeSelecaoDoPersonagem();
        selecionaPersonagem(indice);
    });
});

function removeSelecaoDoBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

function selecionaBotao(botao) {
    botao.classList.add('selecionado');
}

function removeSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

function selecionaPersonagem(indice) {
    personagens[indice].classList.add('selecionado');
}
