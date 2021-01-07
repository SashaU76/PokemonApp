import React, { createContext, Component } from 'react';


export const ThemeContext =createContext();

class PokemonContext extends Component {
    state = { 
        results: [],
        countAddPokemons: 0,
        totalCount: null
        }
    addPokemons = (response) => {
        //debugger
            this.setState(() => ({
                totalCount:  response.data.count,
                results:  [...this.state.results,  ...response.data.results],
                countAddPokemons: this.state.results.length+response.data.results.length
            }));
    }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, addPokemons:this.addPokemons } }>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default PokemonContext;