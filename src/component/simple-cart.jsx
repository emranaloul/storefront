import React from 'react';
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

import {add,remove} from '../store/cart'
import {view} from '../store/details'
const SimpleCart = (props) =>{    
    return (
        <>
        <div id="cartcon">
        <Button id='cart' component={Link} to="/cart">Cart({ props.cart? props.cart.results.length : 0})</Button>
        {/* <h4 id='cart' component={Link} to='/cart'>Cart({ props.cart? props.cart.results.length : 0})</h4> */}
        <ul id="cartul">
        {props.cart.results?props.cart.results.map(val =>
            <li key={val._id}><h5 id="carhead"> <Button size="small" color="primary" component={Link} to={`/product/${val._id}`} onClick={() =>props.view(val)}>
            {val.name}
           </Button> </h5>
           <Button onClick={() =>props.remove(val)}>
               X
           </Button>
           <span> </span>
           <Button onClick={() =>props.add(val)}>
               +
           </Button>
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

const mapDispatchToProps = {add, remove, view};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);