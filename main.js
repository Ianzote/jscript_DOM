function validationForm(e) {
    e.preventDefault();

    let campoA = document.querySelector('.A');
    let campoB = document.querySelector('.B');

    let valorA = Number(campoA.value) || 0;
    let valorB = Number(campoB.value) || 0;

    const spanB = document.querySelector('.erro');
    const spanA = document.querySelector('.certo'); 

    if (valorB < valorA ) {
        e.preventDefault();
        spanB.innerText = 'O campo B deve ser maior que o campo A';
    } else {
        spanA.innerText = 'Formulário enviado com sucesso!';

        setTimeout(() => {
            spanA.innerText = '';
            campoA.value = '';
            campoB.value = '';
        }, 1000);
    }
    
}