let arquivoSelecionado = null;

// Captura o arquivo selecionado e armazena em uma variável
const inputFile = document.getElementById('upload');
inputFile.addEventListener('change', event => {
  arquivoSelecionado = event.target.files[0];
});

function dados() {
  // Coleta os valores do formulário
  let nome = document.getElementById("nome").value;
  let dataAtualizada = document.getElementById("data-atualizacao").value;
  let informacao = document.getElementById("informacoes").value;
  let escolha;
  let tipos = document.getElementsByName("escolha");
  Array.from(tipos).forEach(tipo => {
    if (tipo.checked) {
      escolha = tipo.value;
    }
  });

  // Exibe a imagem se um arquivo tiver sido selecionado
  if (arquivoSelecionado) {
    const url = URL.createObjectURL(arquivoSelecionado);
    document.getElementById("temp").innerHTML = `<div class="card">
                    <h3 class="titulo-card">${nome}</h3>
                    <img src="${url}" alt="" class="imagem-card" width="20px">
                    <p class="conteudo-card">
                        ${informacao}
                    </p>
                </div>`;
  } else {
    document.getElementById("temp").innerHTML = `<div class="card">
                    <h3 class="titulo-card">${nome}</h3>
                    <img src="" alt="" class="imagem-card" width="20px">
                    <p class="conteudo-card">
                        ${informacao}
                    </p>
                </div>`;
  }

}
