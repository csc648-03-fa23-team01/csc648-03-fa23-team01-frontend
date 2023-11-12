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
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.large ? '47.87rem' : '66%'};
  margin: 10px auto;  
  position: relative;
  top: 0.625rem;
  left: 10.5rem;

  select,
  button {
    padding: 10px;
    margin-right: 20px; /* Adjust if needed */
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  input {
    width: 30rem;
    padding: 10px;
    margin-right: 0; /* Remove right margin */
    border: 1px solid #ccc;
    border-right: none;
    border-radius: 4px 0 0 4px;
    box-sizing: border-box;
    height: ${props => props.large ? '8.06rem' : 'auto'};
    font-family: 'Inter';
    font-size: ${props => props.large ? '1.56rem' : 'auto'};
  }
  
  button {
    padding: 10px;
    background-color: #F6A833;
    color: black;
    width: auto;
    margin-left: 0; /* Remove left margin */
    border: 1px solid #F6A833;
    border-left: none;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
    box-sizing: border-box;
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