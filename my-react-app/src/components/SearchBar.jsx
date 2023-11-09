import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { searchAsync } from '../actions/tutorAction';

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
  
  input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-right: none; // Remove the right border to connect with the button
    border-radius: 4px 0 0 4px; // Adjusted border-radius
    box-sizing: border-box; // Include padding and border in the height calculation
  }
  
  button {
    padding: 10px; // Match the vertical padding of the input field
    background-color: #F6A833; // Orange color
    color: black;
    border: 1px solid #F6A833; // Match input field border for consistent height
    border-left: none; // Remove the left border to make it seamless with input
    cursor: pointer;
    border-radius: 0 4px 4px 0; // Adjusted border-radius
    box-sizing: border-box; // Include padding and border in the height calculation
    
    &:hover {
      background-color: #555;
    }
  }
`;

const SearchBar = ({ isHomePage }) => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = async () => {
        console.log(`Searching for: ${searchText}`);
        dispatch(searchAsync(searchText));
        console.log(`Searching complete`);
        if (isHomePage) {
            navigate("/ResultPage");
        }
    };

    return (
        <StyledSearchBar className="search-bar">
            <input
                type="text"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Search  by class (e.g. Math 400), Topic, tutor name " />
            <button onClick={handleSearch}>Search</button>
        </StyledSearchBar>
    );
}

export default SearchBar;
