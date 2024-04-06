export const ShowData=(prop)=>{
    const{data}=prop
    return(
        <>
        <tr className="ste">
            <td>{data.name}</td>
            <td>
                <img src={data.img} alt="fruits" height={100} width={100}></img>
            </td>
        </tr>
        </>
    )
}