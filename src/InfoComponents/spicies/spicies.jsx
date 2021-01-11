import  styles  from "./spicies.module.css";
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useThunkReducer from "react-hook-thunk-reducer";
import reducer, {requestSpicies, toggleMenu} from "../../reducer/reducer";

const Spicies = React.memo((props) => {
    const [spicies, dispatch] = useThunkReducer(reducer, {isItOpen:false});
    
    useEffect(()=>{
        dispatch(requestSpicies(props.pokemonId))
    },[props.pokemonId])

    return ( 
        <div className={styles.Box}>
            <div className={styles.Header} onClick={()=>{dispatch(toggleMenu())}}>Spicies</div>
            { spicies.isItOpen ?
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
        </div>
    );
})

export default Spicies;