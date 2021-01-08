import React from 'react';
import NavMenu from './navigation/navigationMenu'
import './App.css';
import MainPage from './mainPage/mainPage';
import {ThemeContext} from './context/PokemonContext';
import { pokemonAPI } from "./api/pokemonApi";
import Loader from './UI/Loader/Loader';
import { NavLink, Route} from 'react-router-dom';
import PokemonPage from './pokemonPage/pokemonPage';


class App extends React.Component {
  static contextType = ThemeContext
  state= {
    isLoading: false
  }
  requestPokemon=()=>{
    this.setState({isLoading:true})
    pokemonAPI.addPokemons(this.context.countAddPokemons)
    .then(response => {
            this.context.addPokemons(response)
            this.setState({isLoading:false})
        })
  }

  componentDidMount(){
    this.requestPokemon()
  }
  render(){
    return (
      <div className="App">
        <NavLink to={`/`}><h1>juniortest</h1></NavLink>
        <NavMenu props={this.context} pokemonAPI={pokemonAPI}/>
        <div className="contentPart">
          { this.state.isLoading ? <Loader />
            : <ThemeContext.Consumer>{(context)=>{
              return <Route path='/' exact><MainPage context={context} isLoading={this.state.isLoading}
              requestPokemon={this.requestPokemon} /></Route>}}
            </ThemeContext.Consumer>}
            <Route path='/pokemon/:id'><PokemonPage pokemonAPI={pokemonAPI}/> </Route>
        </div>
        <div className="footer"><a href='https://github.com/SashaU76' ><img src="https://image.flaticon.com/icons/png/512/25/25231.png"  width="50" height="50" alt="git logo"/></a></div> 
      </div>
    );
  }
}

export default App;
