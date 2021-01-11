import React, { useEffect, useState } from 'react';
import styles  from "./navigationMenu.module.css";
import { IoArrowRedoCircleSharp, IoArrowUndoCircle} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Backdrop from '../UI/Backdrop/Backdrop';
import reducer, { handlePageChange, toggleList, toggleMenu, initialNavState } from '../reducer/reducer';
import useThunkReducer from 'react-hook-thunk-reducer';


const NavMenu = React.memo((props) => {
    console.log('перерисовка НавМеню');
    const [navState, dispatch] = useThunkReducer(reducer, initialNavState);

    useEffect(()=>{
    if(navState===initialNavState && navState.firstRequest){
      dispatch(handlePageChange())
    }
  }, [])

    
    let listOfPokemons = navState.navMenuData.results.map((e)=>{
            let numberOfItem=parseInt(e.url.substr(30).match(/\d+/))
                    return <NavLink key={numberOfItem} to={`/pokemon/`+numberOfItem}>
                        <div >{e.name}</div> 
                        </NavLink>
            })

    return ( 
        <div className={navState.isItOpen ? styles.Container :  styles.Hidden}>
            <div className={styles.Btn}>
                {navState.isItOpen ? <IoArrowUndoCircle onClick={()=>{dispatch(toggleMenu())}}/>
                : <IoArrowRedoCircleSharp onClick={()=>{dispatch(toggleMenu())}}/>
                }
            </div>
            
            <h1 className={styles.H1}>Menu</h1> 
            <NavLink to={`/`}><h2 className={styles.ListH1}>home</h2></NavLink>
            <div className={styles.ListH1} onClick={()=>{dispatch(toggleList())}}>list of pokemons</div>
                <div className={styles.page}>
                {navState.isListOpen ?
                    <div>
                        <Pagination
                        activeClass={styles.active}
                        activePage={ navState.navMenuActivePage }
                        itemsCountPerPage={ 20 }
                        totalItemsCount={ props.totalCount-20 }
                        pageRangeDisplayed={ 3}
                        onChange={(pageNumber)=>{dispatch(handlePageChange(pageNumber))}}
                        />
                        <div className={navState.isListOpen ? styles.ListOpen: styles.List }>{listOfPokemons}</div>
                    </div>
                    :null
                }
                </div>
                <Backdrop onClick={()=>{dispatch(toggleMenu())}}/>
        </div>
    );
})

export default NavMenu;