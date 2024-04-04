import { imagesData } from "./imagesdata"

const DisplayImages=()=>{
    return(
        <>
        {imagesData.map(obj=>(
     
         <span>
         <p>{obj.Name}</p>
         <img src={obj.img} alt="ipl teams"  height={100} width={100}/>
         </span>
      
         
           ) )}
        </>
    )
}
  
export default DisplayImages;