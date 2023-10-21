import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66%;
  margin: 20px auto;

  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
  }

  select,
  button {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input {
    flex-grow: 1;  // This makes the input expand to occupy available space
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;  // Ensures the input expands to the full width of its container
  }

  button {
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #555;
    }
  }
`;



const SearchBar = () => {
    return (
        <StyledSearchBar className="search-bar">
            <select>
                <option value="all">All</option>
                <option value="math">Math</option>
                <option value="science">Science</option>
                {/* Add more options if needed */}
            </select>
            <input type="text" id="queryString" placeholder="Search The Subject You Like" />
            <button>Search</button>
        </StyledSearchBar>
    );
}

export default SearchBar;
