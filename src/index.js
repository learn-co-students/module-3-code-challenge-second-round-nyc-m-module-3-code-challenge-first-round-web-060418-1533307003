document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://localhost:3000/beers'
  const ulContainer = document.getElementById('list-group')
  const singleBeer = 'http://localhost:3000/beers/'
  const beerDetailDiv = document.getElementById('beer-detail')

  function index() {
    return fetch(apiUrl).then(response=>response.json()).then(data=>displayBeers(data))
  }

  function displayBeers(allBeers) {
    const showBeers = allBeers.map(function(beer) {return `<li data-beer="beer" data-beer-id="${beer.id}">${beer.name}</li>`}).join('')

    ulContainer.innerHTML = showBeers
  }

  function index2(id) {
    fetch(`http://localhost:3000/beers/${id}`).then(response=>response.json()).then(data=>console.log(data))
  }

  ulContainer.addEventListener('click', event => {
    index2(event.target.dataset.beerId)
    let beerId = event.target.beerId
    // renderBeer(data)
    if (event.target.dataset.beerId === `${beerId}`) {
      return `<h1>Beer Name</h1>
              <img src="${beer.image_url}">
              <h3>${beer.tagline}</h3>
              <textarea>Beer Description</textarea>
              <button id="edit-beer" class="btn btn-info">
                Save
              </button>`

    }

    // beerDetailDiv.innerHTML = beerHTML
  })



  index()

  // function editBeer(description) {
  //   const postConfig = {
  //     method: 'PATCH',
  //     body: JSON.stringify(
  //       {description: description}),
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   }
  //   return fetch('http://localhost:3000/beers/:id', postConfig).then(response=>response.json())
  // }


})
