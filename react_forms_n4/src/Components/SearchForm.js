import React from 'react';
import styled from 'styled-components';

function SearchForm(props) {
    const Input = styled.input`
  margin-top: 10px;
  padding: 10px 10px;
  color: black;
  background: white;
  border-color: black;
  border-radius: 3px;
  width: 100%;
  font-size: 18px;
`;
    return <input type="text" value={props.value} onChange={props.change}/>
}

export default SearchForm;