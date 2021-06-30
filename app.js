const fs = require('fs')
const fetch = require('node-fetch')

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

const promisesURL = []
for(let i = 1; i <= 151; i++) {
  promisesURL.push(fetch(`${API_URL}${i}`).then(res => res.json()))
}

Promise.all(promisesURL).then(data => {
    fs.writeFileSync('./pokemons/pokemons.json', JSON.stringify(data))
})