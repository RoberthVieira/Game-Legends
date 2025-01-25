const btnSaberMais =  document.querySelector('.btn_saber_mais');
const clicado = document.querySelector('.esconder');
const btnJoel = document.querySelector('.btn_joel');
const click = document.querySelector('.escondido');

btnSaberMais.addEventListener("click", () => {
    
    const estaEscondido = clicado.classList.toggle('esconder');

    if(estaEscondido){
        btnSaberMais.innerHTML = 'Clique aqui para saber mais';
    } else {
        btnSaberMais.innerHTML = 'Fechar';
    }
})

btnJoel.addEventListener('click', () => {
    const estaEscondido = click.classList.toggle('escondido');

    if(estaEscondido){
        btnJoel.innerHTML = 'Clique aqui para saber mais';
    } else {
        btnJoel.innerHTML = 'Fechar';
    }
})