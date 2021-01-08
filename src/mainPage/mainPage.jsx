import React from 'react';
import styles from './mainPage.module.css';
import  Button from "../UI/Button/Button";
import { NavLink } from 'react-router-dom'


const MainPage = (props) => {

    let Card = (props='without') => {
        return <NavLink to={`/pokemon/`+props.id}>
        <div className={styles.Cards}><div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=""/><div>{props.name}</div></div></div>
        </NavLink>
    }
    let cardItem = props.context.results.map((e)=>{
        return <Card key={parseInt(e.url.substr(30).match(/\d+/))} name={e.name} id={parseInt(e.url.substr(30).match(/\d+/))}/>
    })
    
    return ( 
        <> <div className={styles.Header}>POKEMONS</div> 
            <div className={styles.Container}>{cardItem}</div>
            <Button onClick={props.requestPokemon}>More</Button>
        </>
    );
}

export default MainPage;