let imagemBase64 = null;
let imagemPronta = true;

document.getElementById('upload').addEventListener('change', function (event) {
  const arquivo = event.target.files[0];

  if (arquivo) {
    imagemPronta = false; // bloqueia envio
    const reader = new FileReader();

    reader.onload = function (e) {
      imagemBase64 = e.target.result;
      imagemPronta = true; // imagem carregada
    };

    reader.readAsDataURL(arquivo);
  }
});

function dados(event) {
  event.preventDefault();

  // se a imagem ainda estiver carregando, avisa o usuário
  if (!imagemPronta) {
    alert("Aguarde o carregamento da imagem antes de enviar.");
    return;
  }

  const nome = document.getElementById("nome").value;
  const dataAtualizada = document.getElementById("data-atualizacao").value;
  const informacao = document.getElementById("informacoes").value;

  let escolha = '';
  const tipos = document.getElementsByName("escolha");
  tipos.forEach(tipo => {
    if (tipo.checked) {
      escolha = tipo.value;
    }
  });

  const imagemFinal = imagemBase64 || '';

  document.getElementById("temp").innerHTML = `
    <div class="card">
      <h3 class="titulo-card">${nome}</h3>
      <img src="${imagemFinal}" alt="Imagem selecionada" class="imagem-card" width="25px">
      <p class="conteudo-card">${informacao}</p>
    </div>
  `;
};
