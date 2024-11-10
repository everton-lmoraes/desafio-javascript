function calcular() {
// Capturando os valores dos campos
  const nomeHeroi = document.getElementById('nome').value;
  const nivelHeroi= parseInt (document.getElementById('nivel').value);
  let classificacao;
//Identificando a classificação do herói
  if (nivelHeroi < 1000) {
    classificacao = "Ferro";
  } else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
    classificacao = "Cristal";
  } else if (nivelHeroi >= 2001 && nivelHeroi <= 3000) {
    classificacao = "Bronze";
  } else if (nivelHeroi >= 3001 && nivelHeroi <= 4000) {
    classificacao = "Prata";
  } else if (nivelHeroi >= 4001 && nivelHeroi <= 5000) {
    classificacao = "Ouro";
  } else if (nivelHeroi >= 5001 && nivelHeroi <= 6000) {
    classificacao = "Platina";
  } else if (nivelHeroi >= 6001 && nivelHeroi <= 7000) {
    classificacao = "Diamante";
  } else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    classificacao = "Mestre";
  } else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
    classificacao = "Ascendente";
  } else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    classificacao = "Imortal";
  } else if (nivelHeroi > 10001){
    classificacao = "Radiante";
  }
    document.getElementById('resultado').innerText = `O Herói de nome ${nomeHeroi} está no nível de ${classificacao}.`;
  }

document.getElementById('nome').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calcular();
        event.preventDefault();
    }
});

document.getElementById('nivel').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calcular();
        event.preventDefault();
    }
});