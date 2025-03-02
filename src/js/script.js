console.log('Ola Mundo');
const filmButtons = document.getElementsByClassName('hero__content__buttons__item');
// console.log(filmButtons);
const recommendedButtons = document.querySelectorAll('[data-tab-button]');
// console.log(recommendedButtons);

Array.from(filmButtons).forEach(button => {
    button.addEventListener("click", function(e){
        Array.from(filmButtons).forEach (btn => btn.classList.remove('hero__content__buttons__item--is-active'))
        
        this.classList.add('hero__content__buttons__item--is-active')
        
        })
    }
)

Array.from(recommendedButtons).forEach(buttonRecommended => {
    // ButtonRecommended -> é cada elemento individualmente dentro dessa nodeList
    buttonRecommended.addEventListener('click', function(event){
        event.preventDefault();

        // Target -> referese ao elemento que foi clicado
        // dataset.tabButton -> busca o valor do atributo data-tab-button
       const targetTab = event.target.dataset.tabButton;
        //console.log("Clicou no botão:", targetTab);

        // Verificando se tem um array correspondente
       const tab = document.querySelector(`[data-tab-id="${targetTab}"]`);


       if (!tab) {
        console.error("Aba não encontrada para:", targetTab);
        return;
        }

        // Chamando a função que retira a classe dos filmes recomendados
       closeTabs()
    
        // Removendo a classe dos botões
        recommendedButtons.forEach(btn => btn.classList.remove('recommended__navmenu__links__item--is-active'));
       
       // Adicionando classe ativa no botão clicado
       event.target.classList.add('recommended__navmenu__links__item--is-active');

       // Exibindo a aba correspondente
       tab.classList.add('recommended__list--is-active');
   });
});

// Função para fechar todas as abas dos recomendados
function closeTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('recommended__list--is-active');
    }
}