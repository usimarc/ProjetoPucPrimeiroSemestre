const inputSearch = document.getElementById('inputSearch');
const buttonSearch = document.getElementById('button-addon2');
let card = "";

buttonSearch.addEventListener('click', () => {
  window.location.href = `search.html?busca=${inputSearch.value}`;
  inputSearch.value = '';
})

function searchProdutcs() {
fetch(`http://diwserver.vps.webdock.cloud:8765/products`)
  .then(res => res.json())
  .then(data => {
    console.log(data.products);
    for(i=0; i<9; i+=1){
      // console.log(data[i]);
      card += `
      <div class="card">
      <a href="details.html?id=${data.products[i].id}">
        <img src="${data.products[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          
            <h6 class="card-title textoLimite">${data.products[i].title}</h6>
          </a>
          <div class="rating">
            <p>Cassificação: ${data.products[i].rating.rate}</p>
          </div>
          <p class="card-text">Valor: R$ ${data.products[i].price} </p>
        </div>
      </div>`;     
    }
    document.getElementById('mosaic').innerHTML = card;
  });

};

  searchProdutcs();
