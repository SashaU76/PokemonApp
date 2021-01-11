/* import React, { createContext, Component } from 'react';


//export const ThemeContext =createContext();

class PokemonContext extends Component {
    state = { 
        results: [],
        countAddPokemons: 0,
        totalCount: null,
        appIsLoading: false
        }
    
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, addPokemons:this.addPokemons } }>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default PokemonContext; */