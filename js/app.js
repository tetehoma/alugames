

function alterarStatus(numberGame){
    //getElementById get the element by especific Id in HTML code and put in a variable.
    //querySelector select the element's attribut and put in other variable.
    let gameNow = document.getElementById(`game-${numberGame}`);
    let botton = (gameNow.querySelector('a'));
    let image = (gameNow.querySelector('div'));
    //classList list all the class includes in the element, use property like contains, remove e etc.
    if (botton.textContent == 'Alugar') {
        botton.textContent = 'Devolver';
        botton.classList.add('dashboard__item__button--return');
        image.classList.add('dashboard__item__img--rented');
    } else {
        botton.textContent = 'Alugar';
        botton.classList.remove('dashboard__item__button--return');
        image.classList.remove('dashboard__item__img--rented');
    }
}

