import { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        year: '',
        interests: '',
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

    // make a post request to our rails server
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        // to clear the form after submitting
        setFormData(
            {
                name: '',
                email: '',
                course: '',
                year: '',
                interests: '',
                password: '',
                passwordconfirm: ''
            }
        );
    };

    return (
        <div className='signup-container d-flex justify-content-center align-items-center bg-light'>
            <div className='signup-form p-5 rounded shadow bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center mb-4'>Create An Account</h3>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter Name'
                            className='form-control'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter Email'
                            className='form-control'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="course" className='form-label'>Course</label>
                        <input
                            type="text"
                            id="course"
                            name="course"
                            placeholder='Course'
                            className='form-control'
                            value={formData.course}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="year" className='form-label'>Year</label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            placeholder='Year'
                            className='form-control'
                            value={formData.year}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="interest" className='form-label'>Interests</label>
                        <input
                            type="text"
                            id="interest"
                            name="interests"
                            placeholder='Interests'
                            className='form-control'
                            value={formData.interests}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter Password'
                            className='form-control'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="passwordconfirm" className='form-label'>Password Confirmation</label>
                        <input
                            type="password"
                            id="passwordconfirm"
                            name="passwordconfirm"
                            placeholder='Re-enter Password'
                            className='form-control'
                            value={formData.passwordconfirm}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='d-grid'>
                    <button ><Link to="/profile" >Sign Up</Link></button>
                    </div>
                    <p className='text-center mt-3'>
                       Already Registered? <Link to="/" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
