const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Exemplo de ação para demonstração do projeto.');
  });
});