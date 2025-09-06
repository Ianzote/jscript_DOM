function validationForm(e) {
    let campoA = document.querySelector('.A');
    let campoB = document.querySelector('.B');

    let valorA = Number(campoA.value) || 0;
    let valorB = Number(campoB.value) || 0;

    const spanB = document.querySelector('.erro'); 

    if (valorB < valorA ) {
        e.preventDefault();
        spanB.innerText = 'O campo B deve ser maior que o campo A';
    } else {
        spanB.innerText = '';
    }
}