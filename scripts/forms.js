let imagemBase64 = null;
let imagemPronta = true;

document.getElementById('upload').addEventListener('change', function (event) {
  const arquivo = event.target.files[0];

  if (arquivo) {
    imagemPronta = false;
    const reader = new FileReader();

    reader.onload = function (e) {
      imagemBase64 = e.target.result;
      imagemPronta = true;
    };

    reader.readAsDataURL(arquivo);
  }
});

function dados(event) {
  event.preventDefault();

  if (!imagemPronta) {
    alert("Aguarde o carregamento da imagem antes de enviar.");
    return;
  }

  const nome = document.getElementById("nome").value;
  const dataAtualizada = document.getElementById("data-atualizacao").value;
  const informacao = document.getElementById("informacoes").value;

  let escolha = '';
  document.getElementsByName("escolha").forEach(tipo => {
    if (tipo.checked) {
      escolha = tipo.value;
    }
  });

  const imagemFinal = imagemBase64 || '';

  // Criar objeto com os dados
  const novoRegistro = {
    nome,
    dataAtualizada,
    informacao,
    escolha,
    imagem: imagemFinal
  };

  // Recupera os dados salvos anteriormente ou inicializa com array vazio
  const registrosExistentes = JSON.parse(localStorage.getItem("atualizacoes")) || [];

  // Adiciona novo registro
  registrosExistentes.push(novoRegistro);

  // Salva de volta no localStorage
  localStorage.setItem("atualizacoes", JSON.stringify(registrosExistentes));

  // Exibir no DOM (opcional)
  document.getElementById("temp").innerHTML = `
    <div class="card">
      <h3 class="titulo-card">${nome}</h3>
      <img src="${imagemFinal}" alt="Imagem selecionada" class="imagem-card" width="25px">
      <p class="conteudo-card">${informacao}</p>
    </div>
  `;

  // Opcional: limpar o formulário
  document.querySelector(".form").reset();
  imagemBase64 = null;
}
