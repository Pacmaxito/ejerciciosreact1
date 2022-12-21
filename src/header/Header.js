import { Link } from "react-router-dom";

function Header(){

    return(

    <>
        <ul>
            <li>
            <Link to ='/'>Home</Link>
            </li>
            
            <li>
            <Link to ='/nombre'>Nombre</Link>
            </li>
        </ul>
    </>

    )

}

export default Header;