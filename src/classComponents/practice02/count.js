import { Component } from "react";

class Count extends Component{
    state={
        count:0
    }
    incrementCount=(val=1)=>{
        this.setState(
            {
               count:this.state.count+=val
            }
        )
    }
    decrementCount=()=>{
        this.state.count>0&&
        this.setState(
            {
                count:this.state.count-=1
            }
        )
    }
    resetCount=()=>{
        this.setState(
            {
                count:0
            }
        )
    }
    render(){
        return(
            <>
        <h3>Count:{this.state.count}</h3>

        <button onClick={()=>this.incrementCount()}>incrementCount</button>
        <button onClick={this.decrementCount}>decrementCount</button>
        <button onClick={this.resetCount}>resetCount</button>
       
        </>
        )
    }
}
export default Count;