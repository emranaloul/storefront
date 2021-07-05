import React from 'react';
import './header.scss'
import AppBar from '@material-ui/core/AppBar';
import Cart from './simple-cart'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: `
     display: inline;
     float left;
    `,
  });


const Header = ()=>{

    return (
        <React.Fragment>
        {/* <AppBar className={useStyles.root}>
        </AppBar> */}
        <header>
        <h1>
           FrontStore
        </h1>
        <Cart/>
       

        </header>
        </React.Fragment>
    )
}

export default Header;