import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3 style={{color: "#fff"}}><i style={{marginRight: "5px"}} class="fa-solid fa-gears fa-3x"></i>WholeSale MS</h3>
      <ul>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/"><li className='link' style={{listStyle: "none", marginTop: "60px" , marginBottom: "30px"}}><i class="fa-solid fa-house"></i> Home</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/stock"><li className='link' style={{listStyle: "none", marginBottom: "30px"}}><i class="fa-solid fa-cart-shopping"></i> Stock Details</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/buyer"><li className='link' style={{listStyle: "none", marginBottom: "30px"}}><i class="fa-solid fa-person"></i> Buyer</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/customer"><li className='link' style={{listStyle: "none", marginBottom: "30px"}}><i class="fa-solid fa-user"></i> Customer Details</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/defaulter"><li className='link' style={{listStyle: "none", marginBottom: "30px"}}><i class="fa-solid fa-pen-nib"></i> Defaulters List</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/payment"><li className='link' style={{listStyle: "none", marginBottom: "30px"}}><i class="fa-solid fa-money-bill-1-wave"></i> Payment List</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/reorder"><li className='link' style={{listStyle: "none", marginBottom: "30px"}}><i class="fa-solid fa-registered"></i> Reorder</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/profit"><li className='link' style={{listStyle: "none", marginBottom: "30px"}}><i class="fa-solid fa-sack-dollar"></i> Profit</li></Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/check"><li className='link' style={{listStyle: "none"}}><i class="fa-solid fa-check"></i> Check Stock</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar
