import React, { useEffect, useState } from 'react';
import styles  from "./navigationMenu.module.css";
import { IoArrowRedoCircleSharp, IoArrowUndoCircle} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Backdrop from '../UI/Backdrop/Backdrop';



const NavMenu = (props) => {
    const [isMenuOpen, setMenuOpen]=useState(false)
    const [isListOpen, setListOpen]=useState(false)
    const [ NavData, setNavData ] = useState({results:[]})
    const [ activePage, setActivePage] = useState()
    
    
    useEffect(()=>{
        setNavData(props.props);
    }, [props.props.results])

    let toggleNav=()=>{
        setMenuOpen(!isMenuOpen)
    }
    let toggleList=()=>{
        setListOpen(!isListOpen)
    }
    let listOfPokemons = NavData.results.map((e)=>{
            let numberOfItem=parseInt(e.url.substr(30).match(/\d+/))
                    return <NavLink key={numberOfItem} to={`/pokemon/`+numberOfItem}>
                        <div >{e.name}</div> 
                        </NavLink>
            })

    const handlePageChange = ( pageNumber ) => {
        requestPokemonNav(pageNumber)
        setActivePage(pageNumber)

    };
    const requestPokemonNav=(pageNumber)=>{
    let offset=pageNumber*20
    props.pokemonAPI.addPokemons(offset)
    .then(response => {
            setNavData(response.data)
        })
    }

    return ( 
        <div className={isMenuOpen ? styles.Container :  styles.Hidden}>
            <div className={styles.Btn}>
                {isMenuOpen ? <IoArrowUndoCircle onClick={()=>{toggleNav()}}/>
                : <IoArrowRedoCircleSharp onClick={()=>{toggleNav()}}/>
                }
            </div>
            
            <h1 className={styles.H1}>Menu</h1> 
            <NavLink to={`/`}><h2 className={styles.ListH1}>home</h2></NavLink>
            <div className={styles.ListH1} onClick={toggleList}>list of pokemons</div>
                <div className={styles.page}>
                {isListOpen ?
                    <div>
                        <Pagination
                        activeClass={styles.active}
                        activePage={ activePage }
                        itemsCountPerPage={ 20 }
                        totalItemsCount={ props.props.totalCount-20 }
                        pageRangeDisplayed={ 3}
                        onChange={ handlePageChange }
                        />
                        {NavData!=undefined?
                        <div className={isListOpen ? styles.ListOpen: styles.List }>{listOfPokemons}</div>
                        : null
                        }
                    </div>
                    :null
                }
                </div>
                <Backdrop onClick={toggleNav}/>
        </div>
    );
}

export default NavMenu;