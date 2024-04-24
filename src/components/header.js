import { Link } from "react-router-dom";
const HeaderSection=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={{margin:20}}>
        {/* <a className="nav-link active" href="#">
          Active
        </a> */}
      <Link  style={{textDecoration:"none",color:"black"}} to={"/"}>Home</Link>
      </li>
      <li className="nav-item" style={{margin:20}}>
      <Link style={{textDecoration:"none",color:"black"}} to={"/contact"}>Contact</Link>
      </li>
      <li className="nav-item" style={{margin:20}}>
      <Link style={{textDecoration:"none",color:"black"}} to={"/aboutsection"}>About</Link>
      </li>
    </ul>
  </div>
</nav>

        </>
    )
}
export default HeaderSection;