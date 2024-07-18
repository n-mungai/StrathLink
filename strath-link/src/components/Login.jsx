import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [ currentUserId, setCurrentUserId ] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // make a post request to the rails server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        //setCurrentUserId(data.student.id);
      } else {
        console.log("Error: ", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // to clear the form after submiiting
    setFormData(
        {
            email: '',
            password: '',
        }
    );
    // const history = useHistory();
    // history.push('/home')
    // Navigate('/home')
  };

  return (
    <div className="login-container">
      <div id="login-form"  className="form-container p-5 rounded shadow bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Log In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
          <button >SIGN IN</button>
          </div>
          <p className="text-right">
            Forgot <a href="">Password?</a>
            <Link to="/signup" className="ms-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
