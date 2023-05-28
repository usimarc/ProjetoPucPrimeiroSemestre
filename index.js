const inputSearch = document.getElementById('inputSearch');
const buttonSearch = document.getElementById('button-addon2');
let card = "";

buttonSearch.addEventListener('click', () => {
  window.location.href = `search.html?busca=${inputSearch.value}`;
  inputSearch.value = '';
})

function searchProdutcs() {
fetch(`https://fakestoreapi.com/products?limit=9`)
  .then(res => res.json())
  .then(data => {
    for(i=0; i<data.length; i+=1){
      // console.log(data[i]);
      card += `
      <div class="card">
      <a href="details.html?id=${data[i].id}">
        <img src="${data[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          
            <h6 class="card-title textoLimite">${data[i].title}</h6>
          </a>
          <div class="rating">
            <p>Cassificação: ${data[i].rating.rate}</p>
          </div>
          <p class="card-text">Valor: R$ ${data[i].price} </p>
        </div>
      </div>`;     
    }
    document.getElementById('mosaic').innerHTML = card;
  });

};

  searchProdutcs();
