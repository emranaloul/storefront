import React from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";


// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { add, remove} from '../store/cart'

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Products = (props) => {
console.log("🚀 ~ file: products.jsx ~ line 51 ~ Products ~ props", props)
    const classes = useStyles();
    const classes2 = useStyles2();

    const addHandler = (val,e) =>{
     e.preventDefault();
      props.add(val)
    }

  return (      
    <React.Fragment>
    
        {props.category? (<section>
            <h1 id="category"> {props.category.type}</h1>
            <h4>Category Description Goes Here</h4>
        </section>
                    ) : null}
              
        <div className={classes2.root}>
      <Grid container spacing={3}>
      {
      props.category
        ?   props.category.data.map((val) => (

            <Grid item xs={3}>
            <Paper className={classes2.paper}>  <div key={val._id} id="card">
              
      <CardHeader
      />
      <CardMedia
        className={classes.media}
        image={ `https://source.unsplash.com/random?${val.name}&quot` }
        title={val.name}
      />
     <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={val.name}
      />
  
    <Button size="small" color="primary" onClick={(e) =>addHandler(val,e)}>
                Add To Cart
               </Button>
               <Button size="small" color="primary">
                View Details
               </Button>
            </div></Paper>
          </Grid>
          
          ))
        : null}
        </Grid>
    </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
});
const mapDispatchToProps = {add, remove};

export default connect(mapStateToProps, mapDispatchToProps)(Products);



