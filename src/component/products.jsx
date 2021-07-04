import React , {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';
const Products = props => {
    const [data, setData] = useState();
let state ={
    data : data
}

useEffect(()=>{
    (async()=>{
        
        await setData(props.category.data)
        console.log("🚀 ~ file: products.jsx ~ line 13 ~ useEffect ~ props.category.data", Promise.resolve(props.category))
         
    })()

}, [props.category])

    return (
        <div>
            <ul>
                {console.log("🚀 ~ file: products.jsx ~ line 9 ~ props", state.data)}
                {state.data? state.data.map(val => 
                 <li key={val._id}> {val.name} </li>   
                ): null}
            </ul>
        </div>

    )
}

const mapStateToProps = state =>({
    category: state.category
})

export default connect(mapStateToProps)(Products);