import  styles  from "./abilities.module.css";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Loader from "../../UI/Loader/Loader";

const Abilities = (props) => {

    const [isItOpen, setOpen]= useState(false)
    const [abilities, setAbilities]= useState(null)
    const [currentPoint, setCurrent]= useState()
    const [isLoading, setLoading]= useState(false)
    /*useEffect(()=>{
        props.pokemonAPI.getPokemon(currentPokemon)
        .then(response => {
            setPokInfo(response.data)
        }).then(()=>{console.log(abilities);})
    }, [props.currentPokemon]) */
    const requestAbility=(url)=>{
        setLoading(true)
        props.pokemonAPI.getAdditional(url)
        .then(response =>{
            let EnLanguage=response.data.effect_entries.findIndex((e)=>{
                return e.language.name==="en"
            })
            setAbilities(response.data.effect_entries[EnLanguage])
            setLoading(false)
        })
    }
    let abilityItem = props.abilities.map((e)=>{
        //debugger
        return (
            <div onClick={()=>{requestAbility(e.ability.url)}} key={uuidv4()} className={styles.AbilityItem}>{e.ability.name}</div>
        )
    })
    let toggleOpen=()=>{
        setOpen(!isItOpen)
        if(!isItOpen)setAbilities(null)
    }

    return ( 
        <div className={styles.Box}>
            <div className={styles.Header} onClick={()=>{toggleOpen()}}>Abilities</div>
            { isItOpen ?
                <div>
                    <div >{abilityItem}</div>
                    {isLoading ? <Loader /> :
                        <div>
                        {abilities ?
                        <div>
                            <div className={styles.StrongText}>Effect: </div>{abilities.effect}<br/>
                            <div className={styles.StrongText}>Short Effect: </div>{abilities.short_effect}
                        </div>
                        : null
                        }
                        </div>
                    }   
                </div>
                : null
            }
            
        </div>
     );
}
 
export default Abilities;