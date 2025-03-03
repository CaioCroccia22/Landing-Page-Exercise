console.log('Ola Mundo');
const filmButtons = document.getElementsByClassName('hero__content__buttons__item');
const recommendedButtons = document.querySelectorAll('[data-tab-button]');
const header = document.querySelector('#header');


// Evento para selecionar a altura do header-------------------------------------------
window.addEventListener('scroll', function(){
    const scrollHeight = window.scrollY; //captura a posição do scroll
    if (scrollHeight > 200){
        console.log('Altura maior que 1000');
        header.style.backgroundColor = '#15161D-';
    } else{
        header.style.backgroundColor = 'transparent'
    }
})


// Evento para trocar as classes dos botão de filme-----------------------------------------------
Array.from(filmButtons).forEach(button => {
    button.addEventListener("click", function(e){
        Array.from(filmButtons).forEach (btn => btn.classList.remove('hero__content__buttons__item--is-active'))
        
        this.classList.add('hero__content__buttons__item--is-active')
        
        })
    }
)

// Evento para trocar a classe dos botões de recomendados-------------------------------
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