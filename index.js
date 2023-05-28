let card = "";
fetch('https://fakestoreapi.com/products?limit=9')
  .then(res => res.json())
  .then(data => {
    for(i=0; i<data.length; i+=1){
      console.log(data[i]);
      card += `
      <div class="card">
        <img src="${data[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="#">
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
  

