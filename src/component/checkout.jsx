import React from 'react';
import {connect} from 'react-redux';
import './checkout.scss';

const Checkout = (props) => {
    let total=0;
    props.cart.results.map(value => {
        total += value.price
    })
    return(
        <>
        <div id="ordersummery">
        <h3 id='Order'>Order Summery</h3>
        {props.cart.results.map((val)=>
                 
        (<section id='orderD'>
                <h4>{val.name}</h4>
                <h3 id='price'>{val.price}</h3>
        </section>)

            )}

            <hr></hr>
           
            <section id='orderD'>
                <h4>Total:</h4>
                <h3 id='price'>{total.toFixed(2)}</h3>
              </section>
            

</div>
        </>
    )
}

const mapStateToProps = (state) =>({
    cart: state.cart
})

export default connect(mapStateToProps)(Checkout);
