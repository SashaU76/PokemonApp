import  styles  from "./abilities.module.css";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Loader from "../../UI/Loader/Loader";
import useThunkReducer from "react-hook-thunk-reducer";
import reducer,{toggleMenu, requestAbility} from "../../reducer/reducer";

const Abilities = React.memo((props) => {
    const [abilities, dispatch] = useThunkReducer(reducer, {isItOpen:false, appIsLoading: false});
    
    let abilityItem = props.abilities.map((e)=>{
        return (
            <div onClick={()=>{dispatch(requestAbility(e.ability.url))}} key={uuidv4()} className={styles.AbilityItem}>{e.ability.name}</div>
        )
    })
    
    return ( 
        <div className={styles.Box}>
            <div className={styles.Header} onClick={()=>{dispatch(toggleMenu())}}>Abilities</div>
            { abilities.isItOpen ?
                <div>
                    <div >{abilityItem}</div>
                    {abilities.appIsLoading ? <Loader /> :
                        <div>
                        {abilities.effect ? 
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
})

export default Abilities;