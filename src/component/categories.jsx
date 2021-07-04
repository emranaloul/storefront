import React from 'react';
import { connect } from 'react-redux';

import { electronics, food } from '../store/categories';

const Category = (props) =>{
    return(
        <>
        <button type="button" onClick={ () =>  { props.food('food')}} >Food</button>
        <button type="button" onClick={() => {props.electronics('electronics')}}>Electronics</button>
        </>
    )
}

const mapStateToProps = (state) =>({
    state: state.category
})
const mapDispatchToProps = {electronics, food};



export default connect(mapStateToProps, mapDispatchToProps)(Category);