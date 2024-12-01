function hideshow(method){
    const credit_card =document.getElementById('op');
    if(method== cash)
    {
        credit_card.classList.add('hidden');
    }
    else if(method == credit ){
        credit_card.classList.remove('hidden');
    }
}