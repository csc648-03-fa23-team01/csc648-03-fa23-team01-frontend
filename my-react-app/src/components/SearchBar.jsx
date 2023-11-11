import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { searchAsync } from '../actions/tutorAction';
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import TextField from '@mui/material/TextField';
import { topics } from '../constants/subject_constants';


const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.large ? '47.87rem' : '66%'};
  margin: 20px auto;  
  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
    height: ${props => props.large ? '5.06rem' : 'auto'};
  }

  select,
  button {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-right: none; // Remove the right border to connect with the button
    border-radius: 4px 0 0 4px; // Adjusted border-radius
    box-sizing: border-box; // Include padding and border in the height calculation
    height: ${props => props.large ? '5.06rem' : 'auto'};
    font-family: 'Inter';
    font-size: ${props => props.large ? '1.56rem' : 'auto'};
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
    height: ${props => props.large ? '5.06rem' : 'auto'};
    font-family: 'Inter';
    font-size: ${props => props.large ? '1.56rem' : 'auto'};   
    &:hover {
      background-color: #555;
    }
  }
`;

const SearchBar = ({ isResultPage = false, large= false}) => {
const [searchText, setSearchText] = useState('');
const [searchType, setSearchType] = useState('Subject');

  const dispatch = useDispatch();
  const navigate = useNavigate();
function isAlphanumeric(str) {
  return /^[a-zA-Z0-9 ]+$/.test(str);
}

const OPTIONS_LIMIT = 5;
  const defaultFilterOptions = createFilterOptions();
  
  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

    const handleSearch =  async () =>{
        console.log(`Searching for: ${searchText}`);
        if(isAlphanumeric(searchText) || searchText ==""){
          dispatch(searchAsync(searchText,searchType ));
          console.log(`Searching complete`);
          if(!isResultPage){
              navigate("/ResultPage");
          }
        }else{
          alert("Only alphanumeric characters allowed")
        }
      
    };
    const handleSearchText = (event, newText) => {
      setSearchText(newText);
    };

    return (
        <StyledSearchBar className="search-bar">
            <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="Subject">Subject</option>
                <option value="Classes">Classes</option>
                <option value="Language">Language</option>
                <option value="asd">Return all</option>
            </select>
                <Autocomplete
                filterOptions={filterOptions}
                id="combo-box-demo"
                value={searchText}
                onChange={handleSearchText}
                options={topics}
                getOptionLabel={(option) => {

                  if (option === 0) {
                    return "0";
                  }
                  return option.toString(); 
                }}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                <input {...params.inputProps} placeholder="Search The Subject You Like"  
                  />
                  </div>
                )}
        />
            <button onClick={handleSearch}>Search</button>
        </StyledSearchBar>
    );
}

export default SearchBar;