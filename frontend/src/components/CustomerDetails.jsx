import React, { useState, useEffect } from 'react';

const CustomerDetails = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data))
            .catch(error => console.error('Error fetching customer details:', error));
    }, []);

    return (
        <div>
        <h1>Customer Details</h1>
        <table className='content'>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default CustomerDetails;
