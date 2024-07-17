import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from "./components/search/Search";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search/>}>SEARCH</Route>
          <Route path='/login' element={<Login />}>LOGIN</Route>
          <Route path='/signup' element={<Signup />}>SIGNUP</Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App