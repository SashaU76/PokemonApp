import  styles  from "./about.module.css";
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const About = (props) => {

    const [isItOpen, setOpen]= useState(false)
    const [about, setAbout]= useState([])
    
    useEffect(()=>{
        requestSpicies()
    },[props.pokemonId])

    const requestSpicies=()=>{
        props.pokemonAPI.getSpecies(props.pokemonId)
        .then(response =>{
            let EnLanguage=response.data.flavor_text_entries.filter((e)=>{
                return e.language.name==="en"
            })
            let newArr=Array.from(new Set(EnLanguage.map(e=>{return e.flavor_text})))
            
            setAbout(newArr)
        })
    }
    
    let textItem = about.map((e)=>{
        return (<div key={uuidv4()}>{e}</div>)
    })
    let toggleOpen=()=>{
        setOpen(!isItOpen)
        //if(!isItOpen)setAbilities(null)
    }

    return ( 
        <div className={styles.Box}>
            <div className={styles.Header} onClick={()=>{toggleOpen(!isItOpen)}}>About</div>
            
            { isItOpen ?
                <div>
                    <div>{textItem}</div>
                </div>
                : null
            }
            
        </div>
    );
}
 
export default About;