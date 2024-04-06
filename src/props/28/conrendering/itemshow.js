
const FoodList = (props) => {
    const{items}=props
  return (
    <>
    
      <ul>
        {items.map((item) => (
          <li >
            {item.type === 'fruit' ? (
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAun0VANj1A4L58nLs-QW_VQJwCd3Y5MqsCIwLPQGXImX5NWGJqmbV7gTyXNURhXfHplA&usqp=CAU" alt="fruit" /> {item.name}
              </div>
            ) : (
              <div>
                <img src="https://static.vecteezy.com/system/resources/previews/022/984/730/non_2x/vegetable-transparent-free-png.png" alt="vegetable" /> {item.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default FoodList