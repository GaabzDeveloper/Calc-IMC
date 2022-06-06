function Escopo() {
  const form = document.querySelector('.form');
  const result = document.querySelector('#result');

  let Imc = [];

  function elementForm(event) {
    event.preventDefault();

    Imc = [];

    let error = false;

    let weight = form.querySelector('#peso').value
    let height = form.querySelector('#altura').value

    let imc = (weight) / (height * height);

    let nivel;

    if (!imc || !height || !weight) {
      error = 'Dados Inválidos. (ERRO)';
      document.querySelector('#result').style.backgroundColor = 'rgb(187, 53, 53)';
    } else {
      document.querySelector('#result').style.backgroundColor = 'rgb(135, 108, 236)';
    }

    if (imc < 18.5) {
      nivel = '(Você está abaixo do peso!)';
    } else if (imc >= 18.5 && imc <= 24.9) {
      nivel = '(Você está com o peso normal!)'
    } else if (imc >= 25 && imc <= 29.9) {
      nivel = '(Você com Sobrepeso!)'
    } else if (imc >= 30 && imc <= 34.9) {
      nivel = '(Você está com Obesidade grau 1!)'
    } else if (imc >= 35 && imc <= 39.9) {
      nivel = '(Você está com Obesidade grau 2!)'
    } else if (imc >= 40) {
      nivel = '(Você está com Obesidade grau 3!)'
    }

    let dataArm = `Seu Imc é: ${imc.toFixed(2)} ${nivel}`;

    Imc.push(dataArm);
    result.innerHTML = `<p>${error ? error : Imc}</p>`;
  }
  form.addEventListener('submit', elementForm);
}

Escopo();