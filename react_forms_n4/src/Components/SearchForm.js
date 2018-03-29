import React from 'react';

function SearchForm(props) {
    return <input type="text" className="searchInput" value={props.value} onChange={props.change}/>
}

export default SearchForm;