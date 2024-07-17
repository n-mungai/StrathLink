import  {useState} from "react";
import { FaSearch } from "react-icons/fa";
import './search.css';

/* eslint-disable-next-line react/prop-types */
export const SearchBar =({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("http://127.0.0.1:3000/students")
        .then((response) => response.json())
        .then((json) =>{
           const results = json.filter((user) => {
            return (
             value &&
             user && 
             user.name && 
             user.name.toLowerCase().includes(value)
            );
           });
           setResults(results);
        });
        
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-wrappper">
            <FaSearch id="search-icon" />
            <input
             placeholder="Type to search...." 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}
            />
            </div>
    );
};