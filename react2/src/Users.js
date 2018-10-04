import React ,{Component} from 'react';
import Usr from './Usr';
class Users extends Component{
    state={
    users:[{name:"madhu",age:25},
            {name:"Suresh",age:85},
            {name:"Fish",age:89}],
            title:"Bombay"
    }
    makeYes=()=>{
       const newTemp=this.state.users.map((use)=>{
       const temp=use;
       temp.age-=10;
       return temp;
       });
       this.setState(()=>{

        return newTemp
       });
    }
    render(){
       
        return (<div>
            <button onClick={this.makeYes}>make your self younger</button>
            <br/>
            <h1>{this.props.title}</h1>
            <h2>{this.state.title}</h2>
        {
            this.state.users.map((use)=>{
              return <Usr age={use.age}>{use.name}</Usr>
            })

        }
        <Usr age="20">Boss</Usr>
        </div>)
    }
}
export default Users;