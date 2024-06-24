const formulario = document.getElementById('meuFormulario');
const botaoLimpar = document.getElementById('limpar');

botaoLimpar.addEventListener('click', function() {
    formulario.reset();
});
