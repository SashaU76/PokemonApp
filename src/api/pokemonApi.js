import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})


export const pokemonAPI ={
    addPokemons (countAddPokemons) {
        //debugger
        return instance.get(`pokemon/?limit=20&offset=${countAddPokemons}`)
    },
    getPokemon(Id){
        return instance.get(`pokemon/${Id}`)
    },
    getAdditional(url){
        return axios.get(url)
    },
    getSpecies(id){
        return instance.get(`pokemon-species/${id}/`)
    }
}