import FoodList from "./itemshow"

const Condition=()=>{
    const Items=[
        {name:"apple", type:"fruit",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzXzZvgtwdkuQkt1MaHKgoyjmDoSgfGGcFg&s" }
        ,{
            name:"banana" ,
            type:"fruit",
            img:"https://parade.com/.image/t_share/MTk3MDYyOTU3MDI3MzA0NzY3/are-bananas-good-for-you.jpg"
        },{
            name:"Brinjal",type:"vegetable",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjGZJIsQihWVmGPzzMK4kWGqAX6cqMEb6Kg&s"
        },{
            name:"Ladie's finger",type:"vegetable",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnYYFBsmuiEJd279n5Te-oPP-LT6E31zZwQ&s"
        },{
            name:"mango",type:"fruit" ,img:"https://www.nutrition-and-you.com/image-files/xmango-fruit-1.jpg.pagespeed.ic.YyOwpVbFiI.jpg"
        }
    ]
    return(
      <FoodList items={Items}/>
    )
}
export default Condition;