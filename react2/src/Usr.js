import React from 'react';
const Usr1=(props)=>{
    let age=props.age?props.age:"NA";
   
        return (<div>
       
            Name:{props.children}|
                Age:{age}</div>
                )
   
}
export default Usr1;