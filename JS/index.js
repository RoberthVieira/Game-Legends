const btn = document.querySelector('#btn');
const seta = document.querySelector('.seta');

btn.addEventListener("click", function(){


    const existeMenu = document.querySelector(".box_link_personagens");

    if(existeMenu){

        existeMenu.remove();
        seta.src = "assets/IMG/seta-para-baixo.png"

    } else {
        
        const divOpcoesPersonagens = document.createElement('div');
        divOpcoesPersonagens.classList.add('box_link_personagens')

        const linkKratos = document.createElement('a');
        linkKratos.setAttribute("href", "#kratos");
        linkKratos.innerText = "Kratos";

        const linkJoel = document.createElement('a');
        linkJoel.setAttribute("href", "#joel");
        linkJoel.innerText = "Joel";

        const linkDeacon = document.createElement('a');
        linkDeacon.setAttribute("href", "#deacon")
        linkDeacon.innerText = "Deacon st.John"

        const linkArthur = document.createElement('a');
        linkArthur.setAttribute("href", "#arthur")
        linkArthur.innerText = "Arthur Morgan"

        divOpcoesPersonagens.append(linkKratos, linkJoel, linkDeacon, linkArthur);

        btn.appendChild(divOpcoesPersonagens);
        seta.src = "assets/IMG/seta-para-cima.png"

        divOpcoesPersonagens.addEventListener('mouseleave', () => {
            divOpcoesPersonagens.remove();
            seta.src = "assets/IMG/seta-para-baixo.png";
        })
    }

})

