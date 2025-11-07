function alterarStatus(id){
    //getElementById get the element by especific Id in HTML code and put in a variable.
    //querySelector select the element's attribut and put in other variable.
    let gameNow = document.getElementById(`game-${id}`);
    let button = (gameNow.querySelector('.dashboard__item__button'));
    let image = (gameNow.querySelector('.dashboard__item__img'));
    //classList list all the class includes in the element, use property like contains, remove e etc.
    if (image.classList.contains('dashboard__item__img--rented')) {
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');
        image.classList.remove('dashboard__item__img--rented'); 
    } else {
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        image.classList.add('dashboard__item__img--rented');
    }
}

