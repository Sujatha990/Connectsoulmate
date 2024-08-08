// pages/details.js
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Details = () => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('formData');
        if (data) {
            setFormData(JSON.parse(data));
        }
    }, []);

    if (!formData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container py-5">
            <h1 className="mb-5 text-uppercase">Your Details</h1>
            <table className="table table-bordered">
                <tbody>
                    {Object.keys(formData).map(key => (
                        <tr key={key}>
                            <th>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</th>
                            <td>{formData[key] || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};

export default Details;
