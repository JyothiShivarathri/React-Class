import { Component } from "react";
import Count from "./count";
class Button1Component extends Component{
    state={
        isSubscribe:"false",
        text1:"Subscribe",
        text2:"Subscribed",
        fruits:["apple","mango"]
    }
    changeSubscribe=()=>{
        // console.log("clicked")
     this.setState(
        {
            isSubscribe:!this.state.isSubscribe
        }
     )
    }
    addFruit=()=>{
      const newFruit=  [...this.state.fruits,"new Fruit"]
    //   console.log(newFruit)
    this.setState(
        {
            fruits:newFruit
        }
    )
    }
    deleteFruit=(index)=>{
     const newFruits= this.state.fruits.filter((eachFruit,i)=>i!=index)
       this.setState(
        {
            fruits:newFruits
        }
       )
    }
    updateFruit=(index)=>{
      const newFruit = this.state.fruits.map((eachElem,i)=>{
           if(i===index){
            return "Pineapple"
           } else{
            return eachElem
           }
      })
           this.setState(
            {
                fruits:newFruit
            }
           )
      console.log(newFruit)  

    }
    render(){
        return(
            <>
            <button onClick={this.changeSubscribe}>{this.state.isSubscribe?this.state.text1:this.state.text2}</button>
            {
                this.state.isSubscribe?
                <h2>subscribe to see the content</h2>:
                <>
                <h2>Welcome to page</h2>
                <Count></Count>
                <button onClick={this.addFruit}>Add Fruit</button>
                <ol>
                {
                    this.state.fruits.map((elem,index)=>{
                        return(
                            <>
                            <li>{elem}</li>
                            <button onClick={()=>this.deleteFruit(index)}>delete</button>
                            <button onClick={()=>this.updateFruit(index)}>updateFruit</button>
                            </>
                        )
                    })
                }
                </ol>
                </>
            }
            </>
        )
    }

}
export default Button1Component;