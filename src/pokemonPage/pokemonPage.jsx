import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Abilities from '../InfoComponents/abilities/abilities';
import Spicies from '../InfoComponents/spicies/spicies';
import Loader from '../UI/Loader/Loader';
import  styles  from "./pokemonPage.module.css";
import About from '../InfoComponents/forms/about'


const PokemonPage = (props) => {
    const [pokInfo, setPokInfo]= useState([])
    let pokemonId=props.match.params.id
    useEffect(()=>{
        
        props.pokemonAPI.getPokemon(pokemonId)
        .then(response => {
            setPokInfo(response.data)
        })
    }, [props.match.params.id])

    return ( <>
        {pokInfo.length===0 ? <Loader /> :
            <div>
            <div className={styles.Name}><div className={styles.TextName}>{pokInfo.name}</div></div>
            <div className={styles.Wrapper}>
                <div className={styles.Content}>
                    <div className={styles.Info}>
                        <div className={styles.ImgDiv}>
                            <div>
                            <img src={pokInfo.sprites.back_shiny} alt="pokemon"/>
                            <img src={pokInfo.sprites.front_shiny} alt="pokemon"/>
                            </div>
                            <img src={pokInfo.sprites.back_default} alt="pokemon"/>
                            <img src={pokInfo.sprites.front_default} alt="pokemon"/>
                        </div>
                        <div className={styles.BaseInfo}>
                            <b>Name: </b><div>{pokInfo.name}</div>
                            <b>Height: </b><div>{pokInfo.height}</div>
                            <b>Weight: </b><div>{pokInfo.weight}</div>
                            <b>Base experience: </b><div>{pokInfo.base_experience}</div>
                            
                        </div>
                    </div>
                    <div className={styles.Box} ><About forms={pokInfo.forms} pokemonId={pokInfo.id} pokemonAPI={props.pokemonAPI}/></div>
                    <div className={styles.Box} ><Spicies pokemonAPI={props.pokemonAPI} pokemonId={pokInfo.id}/></div>
                    <div className={styles.Box}><Abilities abilities={pokInfo.abilities} pokemonAPI={props.pokemonAPI}/></div> 
                </div> 
            </div> 
            </div>
        }
        </>
    );
}
 

export default withRouter(PokemonPage);