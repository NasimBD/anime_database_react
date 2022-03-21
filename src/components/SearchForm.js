import React, { useEffect, useRef } from 'react'

export const SearchForm = (props) => {
    const searchField = useRef('');

    useEffect(() => {
        searchField.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearchSubmit(searchField.current.value);
        searchField.current.value = '';
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <i className="fas fa-search"></i>
            <input type="text" ref={searchField} placeholder="Search our database..."/>
        </div>
    </form>
  )
}
