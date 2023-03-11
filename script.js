number = 1;
    function changeCard(event){
    number = number + 1;
    const card = event.currentTarget
    card.style.backgroundImage = `url(./assets/card-${number}.svg)`
    if (number == 35){
      number = 0;
    } 
};

