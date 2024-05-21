import React, { useState, useEffect } from 'react';

const BuyerDetails = () => {
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/buyers')
            .then(response => response.json())
            .then(data => setBuyers(data))
            .catch(error => console.error('Error fetching buyer details:', error));
    }, []);

    return (
        <div>
            <h1>Buyer Details</h1>
            <table className='content'>
                <thead>
                    <tr>
                        <th>Buyer ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Stock ID to Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {buyers.map(buyer => (
                        <tr key={buyer.id}>
                            <td>{buyer.id}</td>
                            <td>{buyer.name}</td>
                            <td>{buyer.address}</td>
                            <td>{buyer.stockId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuyerDetails;
