const btnSaberMais =  document.querySelector('.btn_saber_mais');
const clicado = document.querySelector('.esconder');

btnSaberMais.addEventListener("click", () => {
    
    const estaEscondido = clicado.classList.toggle('esconder');

    if(estaEscondido){
        btnSaberMais.innerHTML = 'Clique aqui para saber mais';
    } else {
        btnSaberMais.innerHTML = 'Fechar';
    }
})