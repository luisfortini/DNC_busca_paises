document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar() {
  let pais = document.getElementById('pais').value
  let finalURL =
    'https://restcountries.com/v3.1/name/' + pais + '?fullText=true'
  console.log(finalURL)

  fetch(finalURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data[0])
      console.log(data[0].capital[0])
      console.log(data[0].population)
      console.log(data[0].flags.svg)
      console.log(data[0].continents[0])
      console.log(data[0].name.official)

      let bandeira = document.getElementById('bandeira')
      let nome = document.getElementById('nome')
      let capital = document.getElementById('capital')
      let continente = document.getElementById('continente')
      let populacao = document.getElementById('populacao')

      nome.innerHTML =  data[0].name.official
      bandeira.src = data[0].flags.svg
      capital.innerHTML = data[0].capital[0]
      continente.innerHTML = data[0].continents[0]
      populacao.innerHTML = data[0].population

      document.getElementById('card').style.setProperty('display', 'block', 'important')

    })

    
}
