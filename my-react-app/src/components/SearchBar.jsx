import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { searchAsync } from '../actions/tutorAction';

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.large ? '47.87rem' : '66%'};
  margin: 1.25rem auto;
  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
    height: ${props => props.large ? '5.06rem' : 'auto'};
  }
  
  input {
    flex-grow: 1;
    padding: 0.625rem; 
    border: 0.0625rem solid #ccc; 
    border-right: none; // Remove the right border to connect with the button
    border-radius: 0.25rem 0 0 0.25rem; 
    box-sizing: border-box; // Include padding and border in the height calculation
    height: ${props => props.large ? '5.06rem' : 'auto'};
    font-family: 'Inter';
    font-size: ${props => props.large ? '1.56rem' : 'auto'};
  }
  
  button {
    padding: 0.625rem; 
    background-color: #F6A833; // Orange color
    color: black;
    border: 0.0625rem solid #F6A833;
    border-left: none; // Remove the left border to make it seamless with input
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0; 
    box-sizing: border-box; // Include padding and border in the height calculation
    height: ${props => props.large ? '5.06rem' : 'auto'};
    font-family: 'Inter';
    font-size: ${props => props.large ? '1.56rem' : 'auto'};   
    &:hover {
      background-color: #555;
    }
  }
`;

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9 ]+$/.test(str);
}

const SearchBar = ({ isHomePage, isResultPage = false, large}) => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch =  async () =>{
        console.log(`Searching for: ${searchText}`);
        if(isAlphanumeric(searchText) || searchText ==""){
          dispatch(searchAsync(searchText, "Subject" ));
          console.log(`Searching complete`);
          if(!isResultPage){
              navigate("/ResultPage");
          }
        }else{
          alert("Only alphanumeric characters allowed")
        }
        
    };

    return (
        <StyledSearchBar className="search-bar" large ={large}>
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