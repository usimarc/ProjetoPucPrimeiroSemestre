let card = "";

const parametros = window.location.href;
var id = parametros.split('?')[1].split('=')[1];
console.log(id);

function getProdutc() {

  fetch(`https://diwserver.vps.webdock.cloud/products/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      card += `
      <div class="card style="width: 58rem;">
      
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="card-title textoLimite">${data.title}</h2>
            <div class="rating">
            <p><strong>Descrição:</strong> ${data.description}</p>
          </div>
          <div class="rating">
            <p><strong>Cassificação:</strong> ${data.rating.rate}</p>
          </div>
          <h4 class="card-text"><mark>Valor: R$ ${data.price} </mark></h4>
        </div>
      </div>`;

      document.getElementById('amosaic').innerHTML = card;
    });

};

getProdutc();