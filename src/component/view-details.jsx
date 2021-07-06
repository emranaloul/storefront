import React from 'react'
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import {add,remove} from '../store/cart'
import './view-details.scss'

function render(props) {

console.log("🚀 ~ file: view-details.jsx ~ line 7 ~ render ~ props", props.details)
let item = props.details

    
    return (
        <div id="view-item">
            <h3 id='title'> {item ? item.name : null} </h3>
            <img id="view" src={item?`https://source.unsplash.com/random?${item.name}&quot`: null}  alt={item ?item.name : null}  />
            <h5>In Stock: {item? item.inStock : null} </h5>
            <span> $ {item ?item.price :null}</span>
            <Button onClick={ ()=>{props.add(item ? item:null)}}> Buy </Button>
        </div>
    )
}
const mapStateToProps = state =>({
    details :state.details ,
})
const mapDispatchToProps = {add, remove };
export default connect(mapStateToProps,mapDispatchToProps)(render)