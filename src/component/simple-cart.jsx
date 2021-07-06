import React from 'react';
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

import {add,remove} from '../store/cart'
const SimpleCart = (props) =>{    
console.log("🚀 ~ file: simple-cart.jsx ~ line 8 ~ SimpleCart ~ props", props.match)
    return (
        <>
        <div id="cartcon">
        <Button id='cart' component={Link} to="/cart">Cart({ props.cart? props.cart.results.length : 0})</Button>
        {/* <h4 id='cart' component={Link} to='/cart'>Cart({ props.cart? props.cart.results.length : 0})</h4> */}
        <ul>
        {props.cart.results?props.cart.results.map(val =>
            <li key={val._id}><h5 >{val.name}</h5>
           <button onClick={() =>props.remove(val)}>
               X
           </button>
           <span> </span>
           <button onClick={() =>props.add(val)}>
               +
           </button>
            </li>
            ):null}
            </ul>

        </div>
        {/* <Button> Cart ({ props.category || 0}) </Button> */}
        </>
    )
}

const mapStateToProps = (state) =>({
    cart: state.cart
})

const mapDispatchToProps = {add, remove};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);