import { useEffect, useState } from "react"
import {Link, NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
// const [categories , setCategories ] = useState([])

// const getProduts = async() => {
//   const BASE_URL =  "https://fakestoreapi.com/products/categories "
//   const { data } = await axios(BASE_URL);
//   setCategories(data)
//   setCategories([...data, "all"].reverse());


// }

// useEffect(() => {
//   getProduts()


// }, [])


  return (

 
<Navbar expand="lg" className="">
      <Container className="nav-container ">
        <Navbar.Brand className="logo"  to="/">Yılmaz <span >GIFTS.</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbars">
          <NavLink className="links" to="/">Home</NavLink>
          <NavLink className="links" to="/electronics" >Electronics</NavLink>
          <NavLink className="links" to="/jewelery" >Jewelery</NavLink>
          <NavLink className="links" to="/menClotings" >Men Clotings</NavLink>
          <NavLink className="links" to="/womenClotings" >Women Clotings</NavLink>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar