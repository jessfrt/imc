// script.js

document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // evita recarregar a página
  
    const nome = document.getElementById('nome').value.trim();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');
    const dicaDiv = document.getElementById('dica');
  
    // Validação
    if (!nome || isNaN(peso) || isNaN(altura) || altura <= 0) {
      resultadoDiv.textContent = 'Preencha nome, peso e altura corretamente.';
      dicaDiv.textContent = '';
      return;
    }
  
    // Cálculo do IMC
    const imc = peso / (altura * altura);
  
    // Classificação e mensagem
    let categoria = '';
    let mensagem = '';
  
    if (imc < 18.5) {
      categoria = 'Abaixo do peso';
      mensagem = 'Você está abaixo do peso ideal. Considere uma alimentação mais nutritiva e consulte um nutricionista.';
    } else if (imc < 25) {
      categoria = 'Peso normal';
      mensagem = 'Parabéns! Mantenha hábitos saudáveis: alimentação equilibrada e exercícios regulares.';
    } else if (imc < 30) {
      categoria = 'Sobrepeso';
      mensagem = 'Você está com sobrepeso. Inclua mais alimentos integrais e pratique atividade física.';
    } else if (imc < 35) {
      categoria = 'Obesidade grau I';
      mensagem = 'Seu IMC indica obesidade grau I. Procure orientação profissional para readequação alimentar.';
    } else if (imc < 40) {
      categoria = 'Obesidade grau II';
      mensagem = 'Seu IMC indica obesidade grau II. Um plano multidisciplinar pode ajudar no controle de peso.';
    } else {
      categoria = 'Obesidade grau III';
      mensagem = 'Seu IMC indica obesidade grau III. Busque acompanhamento médico e nutricional imediatamente.';
    }
  
    // Exibe resultados
    resultadoDiv.innerHTML = `
      <p>Olá, ${nome}!</p>
      <p>Seu IMC é <strong>${imc.toFixed(1)}</strong> (${categoria}).</p>
    `;
    dicaDiv.textContent = mensagem;
  });