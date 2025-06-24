import React ,{useState}from "react";
import './SearchField.css'

const SearchField = ({fetchData}) => {
  const [searchValue, setSearchValue] = useState()

  const handleInput = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = () => {
    fetchData(searchValue)
  }
  return (
    <main>
      <form>
        <input
        className="search-box"
        type='text'
        placeholder="What kind of GIFs are you looking for?"
        value={searchValue}
        onChange={handleInput}/>
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
};

// 3uPYTPfMF80n8U1q1PLoIu75lKpbeFzk
export default SearchField;
