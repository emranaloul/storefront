import React from 'react';
import {connect} from 'react-redux';
import './checkout.scss';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
   
  }));
const Checkout = (props) => {
    const classes = useStyles();

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
              <hr></hr>
              <section id='orderDD'>
              <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
               <Typography variant="h6" gutterBottom className={classes.title}>
                 Billing Address
               </Typography>
               <TextField id="name" name="name" label="Full Name" />
               <TextField id="address" name="address" label="Address" />
               <TextField id="city" name="city" label="City" />
               <TextField id="state" name="state" label="State" />
               <TextField id="zip" name="zip" label="zip" />
             </Grid>
             <Grid item xs={12} sm={6}>
               <Typography variant="h6" gutterBottom className={classes.title}>
                 Payment details
               </Typography>
               <TextField id="cc_number" name="cc_number" label="Credit Card #" />
               <TextField
                 id="date"
                 label="Expiration"
                 type="date"
                 InputLabelProps={{
                   shrink: true,
                 }}
               />
               <TextField id="cvv" name="cvv" label="CVV" />
             </Grid>
           </Grid>
           <Grid container alignItems="center" justify="center" spacing={5}>
             <Grid item>
               <Button variant="contained" color="primary">Place Your Order</Button>
             </Grid>
           </Grid>
           </section>

</div>
        </>
    )
}

const mapStateToProps = (state) =>({
    cart: state.cart
})

export default connect(mapStateToProps)(Checkout);
