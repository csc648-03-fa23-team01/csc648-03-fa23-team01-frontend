import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    width: 100%;
    // Add more input styles if needed
  }
`;

export const Box = ({ children }) => {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
};
