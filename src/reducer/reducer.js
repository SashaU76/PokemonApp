import { pokemonAPI } from "../api/pokemonApi";

export let initialState={ 
        results: [],
        countAddPokemons: 0,
        totalCount: null,
        appIsLoading: false,
        firstRequest:true
        
    }
export let initialNavState={ 
        navMenuActivePage: 1,
        navMenuData: {results:[]},
        isItOpen: false,
        isListOpen: false,
        firstRequest:true
    }

    function reducer(state, action) {
    switch (action.type) {
        case 'ADD_POKEMONS':
            return {...state,
                totalCount:  action.response.data.count,
                results:  [...state.results,  ...action.response.data.results],
                countAddPokemons: state.results.length+action.response.data.results.length
            }
        case 'LOADING_TOGGLE':
            return {...state,
                appIsLoading: !state.appIsLoading
            }
        case 'SET_NAV_DATA':
            return {...state,
                navMenuData: action.data
            }
        case 'SET_NAV_ACTIVE_PAGE':
            return {...state,
                navMenuActivePage: action.pageNumber
            }
        case 'TOGGLE_MENU':
            return {...state,
                isItOpen: !state.isItOpen
            }
        case 'TOGGLE_LIST':
            return {...state,
                isListOpen: !state.isListOpen
            }
        case 'FIRST_REQUEST':
            return {...state,
                firstRequest: false
            }
        case 'SET_POKEMON_INFO':
            return {...state,
                ...action.pokemonInfo
            }
        case 'SET_SPICIES':
            return {...state,
                ...action.spicies
            }
        default:
            throw new Error();
    }
    }
    export function addPokemons(response) {
        return {type: 'ADD_POKEMONS', response }
    }
    export function toggleAppLoading() {
        return {type: 'LOADING_TOGGLE' }
    }
    export function setNavData(data) {
        return {type: 'SET_NAV_DATA', data}
    }
    export function setNavActivePage(pageNumber) {
        return {type: 'SET_NAV_ACTIVE_PAGE', pageNumber}
    }
    export function toggleMenu() {
        return {type: 'TOGGLE_MENU' }
    }
    export function toggleList() {
        return {type: 'TOGGLE_LIST' }
    }
    export function firstRequestCheck() {
        return {type: 'FIRST_REQUEST' }
    }
    export function setPokemonInfo(pokemonInfo) {
        return {type: 'SET_POKEMON_INFO', pokemonInfo }
    }
    export function setSpicies(spicies) {
        return {type: 'SET_SPICIES', spicies }
    }
    //санка для App.jsx
    export const requestPokemons=(countAddPokemons)=>{
        return async(dispatch) =>{
            dispatch(toggleAppLoading())
            dispatch(firstRequestCheck())
            let response = await pokemonAPI.addPokemons(countAddPokemons)
            if(response.status===200){
                dispatch(addPokemons(response))
                dispatch(toggleAppLoading())
                }
            }
    }
    //санка для NavigationMenu.jsx
    export const handlePageChange = ( pageNumber=1 ) => {
        return async(dispatch) =>{
            dispatch(firstRequestCheck())
            let offset=pageNumber*20-20
            let response = await pokemonAPI.addPokemons(offset)
            if(response.status===200){
                dispatch(setNavData(response.data))
                dispatch(setNavActivePage(pageNumber))
            }
        }
    };
    //санка для PokemonPage.jsx
    export const requestPok = ( pokemonId ) => {
        return async(dispatch) =>{
            let response = await pokemonAPI.getPokemon(pokemonId)
            if(response.status===200){
                dispatch(setPokemonInfo(response.data))
            }
        }
    };
    //санка для spicies.jsx
    export const requestSpicies = ( pokemonId, aboutcase ) => {
        return async(dispatch) =>{
        let response = await pokemonAPI.getSpecies(pokemonId)
            if(response.status===200){
                if(aboutcase){
                    let EnLanguage=response.data.flavor_text_entries.filter((e)=>{
                        return e.language.name==="en"
                    })
                    let newArr={text:Array.from(new Set(EnLanguage.map(e=>{return e.flavor_text})))}
                    dispatch(setSpicies(newArr)) 
                } 
                else dispatch(setSpicies(response.data))
            }
        }
    }
    //санка для Abilities.jsx
    export const requestAbility = ( url ) => {
        return async(dispatch) =>{
        dispatch(toggleAppLoading())
        let response = await pokemonAPI.getAdditional(url)
        if(response.status===200){
            let EnLanguage=response.data.effect_entries.findIndex((e)=>{
                return e.language.name==="en"
            })
            dispatch(setPokemonInfo(response.data.effect_entries[EnLanguage]))
            dispatch(toggleAppLoading())
            }
        }
    }
export default reducer