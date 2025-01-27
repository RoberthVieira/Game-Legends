const btnSaberMais =  document.querySelector('.btn_saber_mais');
const clicado = document.querySelector('.esconder');
const btnJoel = document.querySelector('.btn_joel');
const clicado2 = document.querySelector('.escondido');
const btnDeacon = document.querySelector('.btn_deacon');
const clicado3 = document.querySelector('.esconde');


btnSaberMais.addEventListener("click", () => {
    
    const estaEscondido = clicado.classList.toggle('esconder');

    if(estaEscondido){
        btnSaberMais.innerHTML = 'Clique aqui para saber mais';
    } else {
        btnSaberMais.innerHTML = 'Fechar';
    }
});

btnJoel.addEventListener('click', () => {
    const estaEscondido = clicado2.classList.toggle('escondido');

    if(estaEscondido){
        btnJoel.innerHTML = 'Clique aqui para saber mais';
    } else {
        btnJoel.innerHTML = 'Fechar';
    }
});

btnDeacon.addEventListener("click", () => {
    const estaEscondido = clicado3.classList.toggle('esconde');

    if(estaEscondido){
        btnDeacon.innerHTML = 'Clique aqui para saber mais';
    } else {
        btnDeacon.innerHTML = 'Fechar';
    }
})