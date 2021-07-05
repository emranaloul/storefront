import React from 'react';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
// // import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { electronics, food } from '../store/categories';

const Category = (props) =>{

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    }
    return(
        <React.Fragment>

<h2>Browse our Categories</h2>

<Button size="small" color="primary" onClick={ () =>{ props.food('food')}}>
        Food
               </Button>
     
      <Button size="small" color="primary" onClick={() => {props.electronics('electronics')}}>
               Electronics
               </Button>
        {/* <button type="button" onClick={ () =>{ props.food('food')}} >Food</button>
        <button type="button" onClick={() => {props.electronics('electronics')}}>Electronics</button> */}
        </React.Fragment>
    )
}


const mapStateToProps = (state) =>({
    state: state.category
})
const mapDispatchToProps = {electronics, food};



export default connect(mapStateToProps, mapDispatchToProps)(Category);