import { Component } from "react";
class AddImages extends Component{
    state={
        images:[
            "https://www.ilovepets.com/wp-content/uploads/2017/11/beagle-e1510859536613.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGujHTztP7pCvZ9gHgwz_UD2K5cVb74yXt2mAMUqRuxA&s"
        ],
        newImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5eqERu1vR9uINd-WFoFzfzNBF3l4DFuqoc7I4xIqRhQ&s"
    }
   
    AddImage=()=>{
       const res= [...this.state.images,this.state.newImg]
       
       this.setState(
        {
            images:res
        }
       )

    }
    deleteImage=(index)=>{
      const deleteImages=this.state.images.filter((eachIMage,i)=>i!=index)
      this.setState(
        {
            images:deleteImages
        }
      )
    }
    updateImage=(index)=>{
       
        const update=this.state.images.map((eachImg,i)=>{
            if(i===index){
                return this.state.newImg
            }
            else{
                return eachImg
            }
    })
        this.setState({
            images:update
        })
    }

    render(){
        return(
            <>
            <button onClick={this.AddImage}>Add</button>
            {
            this.state.images.map((eachImage,index)=>(
            
              <div className="imagesdiv" key={index}>
               <img className="listImage" src={eachImage} alt="dogs" height={150} width={150}></img>
               <button style={{marginTop:30}}onClick={()=>this.deleteImage(index)}>delete</button>
               <button style={{marginTop:30}}onClick={()=>this.updateImage(index)}>Update</button>
               </div>
            ))
           }
            </>
        )
    }
}
export default AddImages
