import React from "react";
import { errorTextStyle } from '../styles/styles'; // Import errorTextStyle from your styles

const formGroupStyle = {
  marginBottom: "10px",
};

const InputField = ({ type, label, value, onChange, error }) => (
  <div style={formGroupStyle}>
    <label>{label}</label>
    <div>
      <input type={type} value={value} onChange={onChange} />
    </div>
    {error && <span style={errorTextStyle}>This field is required.</span>}
  </div>
);

export default InputField;
