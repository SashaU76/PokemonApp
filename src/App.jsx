import React, { useEffect} from 'react';
import NavMenu from './navigation/navigationMenu'
import './App.css';
import MainPage from './mainPage/mainPage';
import { pokemonAPI } from "./api/pokemonApi";
import Loader from './UI/Loader/Loader';
import { NavLink, Route} from 'react-router-dom';
import PokemonPage from './pokemonPage/pokemonPage';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import reducer, {  initialState, requestPokemons } from './reducer/reducer';



  const App = ()=> {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  useEffect(()=>{
    if(state===initialState && state.firstRequest){
      dispatch(requestPokemons(state.countAddPokemons))
    }
  }, [])

    return (
      <div className="App">
        <NavLink to={`/`}><h1>juniortest</h1></NavLink>
        <NavMenu totalCount={state.totalCount} pokemonAPI={pokemonAPI} />
        <div className="contentPart">
          { state.appIsLoading ? <Loader />
            : 
              <Route path='/' exact><MainPage context={state} isLoading={state.appIsLoading}
              requestPokemon={requestPokemons} dispatch={dispatch} /></Route>
          }
          <Route path='/pokemon/:id'><PokemonPage pokemonAPI={pokemonAPI}/> </Route>
        </div>
        <div className="footer"><a href='https://github.com/SashaU76' ><img src="https://image.flaticon.com/icons/png/512/25/25231.png"  width="50" height="50" alt="git logo"/></a></div> 
      </div>
    );
}

export default React.memo(App);
