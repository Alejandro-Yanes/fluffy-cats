import React from 'react';
import './search.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input type="search" className="search" onChange={handleChange} placeholder={placeholder} />
    )
}