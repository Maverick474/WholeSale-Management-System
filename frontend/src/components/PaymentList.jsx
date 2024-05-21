import React, { useState, useEffect } from 'react';

const PaymentList = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/payments')
            .then(response => response.json())
            .then(data => setPayments(data))
            .catch(error => console.error('Error fetching payment details:', error));
    }, []);

    return (
        <div>
        <h1>Payments List</h1>
        <table className='content'>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {payments.map(payment => (
                    <tr key={payment.id}>
                        <td>{payment.id}</td>
                        <td>{payment.name}</td>
                        <td>{payment.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default PaymentList;

/*
<tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.name}</td>
                            <td>{payment.status}</td>
*/