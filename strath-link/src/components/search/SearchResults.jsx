import './search.css';

/* eslint-disable-next-line react/prop-types */
export const SearchResult = ({ result }) => {
   return(
   <div 
   className="search-result" 
   /* eslint-disable-next-line react/prop-types */
   onClick={() => alert(`You clicked on ${result.name}!`)} 
   /* eslint-disable-next-line react/prop-types */
   >{result.name}
   </div>
   );
    
};