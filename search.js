const inputSearchs = document.getElementById('inputSearch3');
const buttonSearch = document.getElementById('button-addon2');
let card = "";

const parametros = window.location.href;
var buscar = parametros.split('?')[1].split('=')[1];

if (buscar) {
  searchProducts(buscar);
}

buttonSearch.addEventListener('click', () => {
  document.getElementById('mosaic').innerHTML = '';
  card = '';
  searchProducts(inputSearchs.value);
});

function searchProducts(buscar) {
  fetch(`https://diwserver.vps.webdock.cloud/products/search?query=${buscar}`)
    .then(res => res.json())
    .then(data => {
      dataFiltrado = data.filter(item => item.title.toLowerCase().includes(buscar.toLowerCase()));
      if (dataFiltrado.length === 0) {
        document.getElementById('mosaic').innerHTML = '<p>Não encontramos nenhum produto com essa descrição. Tente algo como jacket, t-shirt, bag.</p>';
      } else {
        for (i = 0; i < 9; i += 1) {
          console.log(dataFiltrado[i].id);
          card += `
            <div class="card">
              <a href="details.html?id=${dataFiltrado[i].id}">
                <img src="${dataFiltrado[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title textoLimite">${dataFiltrado[i].title}</h6>
                </a>
                <div class="rating">
                  <p>Cassificação: ${dataFiltrado[i].rating.rate}</p>
                </div>
                <p class="card-text">Valor: R$ ${dataFiltrado[i].price} </p>
              </div>
            </div>`;
        }
        document.getElementById('mosaic').innerHTML = card;
      }
    });
}