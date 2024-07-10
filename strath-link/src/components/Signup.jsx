import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        year: '',
        interest: '',
        password: '',
        passwordconfirm: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Ensure password and password confirmation match
        if (formData.password !== formData.passwordconfirm) {
            alert("Passwords do not match!");
            return;
        }
        
        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                // Handle successful response
                alert("Signup successful!");
            } else {
                // Handle error response
                alert(data.message || "Signup failed!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-130 bg-primary'>
            <div className='form-container p-5 rounded bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center'>Create An Account</h3>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Enter Name' className='form-control' value={formData.name} onChange={handleChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Enter Email' className='form-control' value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="course">Course</label>
                        <input type="text" name="course" placeholder='Course' className='form-control' value={formData.course} onChange={handleChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="year">Year</label>
                        <input type="text" name="year" placeholder='Year' className='form-control' value={formData.year} onChange={handleChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="interest">Interests</label>
                        <input type="text" name="interest" placeholder='Interests' className='form-control' value={formData.interest} onChange={handleChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Enter Password' className='form-control' value={formData.password} onChange={handleChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="passwordconfirm">Password Confirmation</label>
                        <input type="password" name="passwordconfirm" placeholder='Renter Password' className='form-control' value={formData.passwordconfirm} onChange={handleChange} />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='text-right'>
                        Already Registered<Link to="/" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup;
