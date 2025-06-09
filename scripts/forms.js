
const inputFile = document.getElementById('upload');

inputFile.addEventListener('change', event => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    document.getElementById("temp").innerHTML = `<img src="${url}" alt="Pré-visualização" width="200">`;
  }
});

function dados(){
    let escolha
    let nome = document.getElementById("nome");
    let dataAtualizada = document.getElementById("data-atualizacao");
    let tipos = document.getElementsByName("escolha");
    Array.from(tipos).forEach(tipo => {
    if (tipo.checked) {
        escolha = tipo.value;
    }
    });
    let informacao = document.getElementById("informacoes");
    
}