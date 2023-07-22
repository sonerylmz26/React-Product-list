import { FaSquareGithub ,FaLinkedinIn, FaTwitter, FaFacebook} from "react-icons/fa6";
import {Link, NavLink} from "react-router-dom"



const Footer = () => {
  return (
    <div className="footer">
<h2>Yılmaz <span>GIFTS.</span></h2>

<div className="icons">
<Link className="link-icon" to="https://github.com/sonerylmz26" ><FaSquareGithub /></Link>
<Link className="link-icon" to="https://www.linkedin.com/in/sonery%C4%B1lmazsy/" ><FaLinkedinIn /></Link>

<Link className="link-icon" to="" ><FaTwitter /></Link>
<Link className="link-icon" to="" ><FaFacebook /></Link>

</div>


    </div>
  )
}

export default Footer