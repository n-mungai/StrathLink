import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login"
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./components/HomePage";
import Messages from './components/Messages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Header />
      <Outlet />
    </div>,
    children: [
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/messages",
        element: <Messages/>
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App