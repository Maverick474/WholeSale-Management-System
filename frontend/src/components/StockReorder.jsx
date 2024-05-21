import React, { useState, useEffect } from 'react';

const ReorderStock = () => {
    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/stocks/reorder')
            .then(response => response.json())
            .then(data => setStock(data))
            .catch(error => console.error('Error fetching stock to reorder:', error));
    }, []);

    return (
        <div>
            <h1>Stock to Reorder</h1>
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

export default ReorderStock;
