import React from 'react';

function SearchForm(props) {
    return <input type="text" value={props.value} onChange={props.change}/>
}

export default SearchForm;