import React, { useState, useEffect } from 'react';

const Defaulters = () => {
    const [defaulters, setDefaulters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/defaulters')
            .then(response => response.json())
            .then(data => setDefaulters(data))
            .catch(error => console.error('Error fetching defaulters:', error));
    }, []);

    return (
        <div>
            <h1>Defaulters List</h1>
            <table className='content'>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Pending Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {defaulters.map(defaulter => (
                        <tr key={defaulter.id}>
                            <td>{defaulter.id}</td>
                            <td>{defaulter.name}</td>
                            <td>{defaulter.pendingAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Defaulters;
