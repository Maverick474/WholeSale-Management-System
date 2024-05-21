import React, { useState, useEffect } from 'react';

const MonthlyProfit = () => {
    const [payments, setPayments] = useState([]);
    const [monthlyProfit, setMonthlyProfit] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/api/profit')
            .then(response => response.json())
            .then(data => {
                setPayments(data);
                calculateMonthlyProfit(data);
            })
            .catch(error => console.error('Error fetching payments:', error));
    }, []);

    const calculateMonthlyProfit = (data) => {
        let totalProfit = data.reduce((sum, payment) => sum + payment.amount, 0);
        setMonthlyProfit(totalProfit);
    };

    return (
        <div>
            <h1>Monthly Profit</h1>
            <table className="content">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Amount Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.customerName}</td>
                            <td>${payment.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total Monthly Profit: ${monthlyProfit}</h2>
        </div>
    );
};

export default MonthlyProfit;
