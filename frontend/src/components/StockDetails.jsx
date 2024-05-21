import React, { useState, useEffect } from 'react';

const StockDetails = () => {
    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/stocks') // Ensure the correct backend URL
            .then(response => response.json())
            .then(data => setStock(data))
            .catch(error => console.error('Error fetching stock details:', error));
    }, []);

    return (
        <div>
            <h1>Stock Details</h1>
            <table className='content'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockDetails;
