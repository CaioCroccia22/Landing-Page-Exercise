// console.log('Ola Mundo');
filmButtons = document.getElementsByClassName('hero__content__buttons__item');
// console.log(filmButtons);

Array.from(filmButtons).forEach(button => {
    button.addEventListener("click", function(e){
        Array.from(filmButtons).forEach (btn => btn.classList.remove('hero__content__buttons__item--is-active'))
        
        this.classList.add('hero__content__buttons__item--is-active')
        
        })
    }
)