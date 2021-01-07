import  styles  from "./spicies.module.css";
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Spicies = (props) => {

    const [isItOpen, setOpen]= useState(false)
    const [spicies, setSpicies]= useState(null)
    const [currentPoint, setCurrent]= useState()
    
    useEffect(()=>{
        requestSpicies()
    },[props.pokemonId])

    const requestSpicies=()=>{
        props.pokemonAPI.getSpecies(props.pokemonId)
        .then(response =>{
            setSpicies(response.data)
        })
    }
    /* let speciesItem = props.abilities.map((e)=>{
        //debugger
        return (
            <div onClick={()=>{requestSpicies(e.ability.url)}} key={uuidv4()} className={styles.AbilityItem}>{e.ability.name}</div>
        )
    }) */
    let toggleOpen=()=>{
        requestSpicies()
        setOpen(!isItOpen)
    }

    return ( 
        <div className={styles.Box}>
            <div className={styles.Header} onClick={()=>{toggleOpen()}}>Spicies</div>
            { isItOpen ?
            <div className={styles.BaseInfo}>
                <div className={styles.StrongText}>Base happines: </div>{spicies.base_happiness}<br/>
                <div className={styles.StrongText}>Capture rate: </div>{spicies.capture_rate}<br/>
                <div className={styles.StrongText}>Forms switchable: </div>{spicies.forms_switchable ? 'Yes' : 'No'}<br/>
                <div className={styles.StrongText}>Has gender differences: </div>{spicies.has_gender_differences ? 'Yes' : 'No'}<br/>
                <div className={styles.StrongText}>Hatch counter: </div>{spicies.hatch_counter}<br/>
                <div className={styles.StrongText}>Is baby: </div>{spicies.is_baby ? 'Yes' : 'No'}<br/>
                <div className={styles.StrongText}>Is legendary: </div>{spicies.is_legendary ? 'Yes' : 'No'}<br/>
                <div className={styles.StrongText}>Is mythical: </div>{spicies.is_mythical ? 'Yes' : 'No'}<br/>
            </div>
            : null
            }
            {/*{ isItOpen ?
                <div>
                    <div >{abilityItem}</div>
                    {abilities ?
                    <div>
                        <div className={styles.StrongText}>Effect: </div>{abilities.effect}<br/>
                        <div className={styles.StrongText}>Short Effect: </div>{abilities.short_effect}
                    </div>
                    : null
                    }
                </div>
                : null
            }
             */}
        </div>
     );
}
 
export default Spicies;