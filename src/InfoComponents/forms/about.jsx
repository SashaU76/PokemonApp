import  styles  from "./about.module.css";
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useThunkReducer from "react-hook-thunk-reducer";
import reducer,{requestSpicies, toggleMenu} from "../../reducer/reducer";

const About = React.memo((props) => {

    //const [isItOpen, setOpen]= useState(false)
    //const [about, setAbout]= useState([])
    const [about, dispatch] = useThunkReducer(reducer, {isItOpen:false, text:[]});
    useEffect(()=>{
        debugger
        let aboutcase=true
        dispatch(requestSpicies(props.pokemonId, aboutcase))
    },[props.pokemonId])

    /* const requestSpicies=()=>{
        props.pokemonAPI.getSpecies(props.pokemonId)
        .then(response =>{
            let EnLanguage=response.data.flavor_text_entries.filter((e)=>{
                return e.language.name==="en"
            })
            let newArr=Array.from(new Set(EnLanguage.map(e=>{return e.flavor_text})))
            
            setAbout(newArr)
        })
    } */
    let textItem = about.text.map((e)=>{
        return (<div key={uuidv4()}>{e}</div>)
    })
    /* let toggleOpen=()=>{
        setOpen(!isItOpen)
    } */

    return ( 
        <div className={styles.Box}>
            <div className={styles.Header} onClick={()=>{dispatch(toggleMenu())}}>About</div>
            
            { about.isItOpen ?
                <div>
                    <div>{textItem}</div>
                </div>
                : null
            }
            
        </div>
    );
})

export default About;