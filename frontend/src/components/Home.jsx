import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Wholesale Management System</h1>
      <p style={{marginTop: "7px"}}>This system allows you to manage stock, buyers, customers, payments, and more. Use the sidebar to navigate through different sections.</p>

      <div className="cards-container">
        <div className="card">
          <h2>Stock Details</h2>
          <p>View and manage stock details.</p>
        </div>
        <div className="card">
          <h2>Buyer</h2>
          <p>Manage buyer information and address.</p>
        </div>
        <div className="card">
          <h2>Customer Details</h2>
          <p>Manage customer information.</p>
        </div>
        <div className="card">
          <h2>Defaulters List</h2>
          <p>View the list of defaulters.</p>
        </div>
      </div>

      <div className='cards-container'>
        <div className="card">
          <h2>Payment List</h2>
          <p>View and manage payments.</p>
        </div>
        <div className="card">
          <h2>Reorder</h2>
          <p>Manage stock reorders.</p>
        </div>
        <div className="card">
          <h2>Monthly Profit</h2>
          <p>View monthly profit details.</p>
        </div>
        <div className="card">
          <h2>Check Stock</h2>
          <p>Check stock availability.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
