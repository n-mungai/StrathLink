import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Profile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        year: '',
        interests: '',
        password: '',
        
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you're using token for authentication
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setFormData(data);
                } else {
                    console.error('Error fetching profile data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:3000/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Profile updated successfully:', data);
            } else {
                console.error('Error updating profile:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className='profile-container d-flex justify-content-center align-items-center vh-50 bg-light'>
            <div className='profile-form p-5 rounded shadow bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center mb-4'>Your Profile</h3>
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
                    
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-primary btn-block'>Update Profile</button>
                    </div>
                    <p className='text-center mt-3'>
                        <Link to="/" className='ms-2'>Go Back</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Profile;
