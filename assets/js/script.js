//Animação da barra de navegação
document.getElementById('icone-menu').addEventListener('click', function() {
    const nav = document.querySelector('.barra-de-nav');
    nav.classList.toggle('ativo');
});

// Função para exibir a mensagem "Formulário enviado" e limpar os campos
function mostrarMensagem(event) {
    // Impede o envio real do formulário (simulando o envio)
    event.preventDefault();

    // Exibe a mensagem de sucesso em uma janela de alerta
    alert("Formulário enviado com sucesso!");

    // Limpa os campos do formulário
    const formulario = document.getElementById("formContato");
    formulario.reset();
}

// Adiciona o evento de envio do formulário
const formulario = document.getElementById("formContato");
if (formulario) {
    formulario.addEventListener("submit", mostrarMensagem);
}