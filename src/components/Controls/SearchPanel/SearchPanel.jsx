import React from 'react';
import classes from './SearchPanel.module.css';
import { IoSearch } from 'react-icons/io5';

const SearchPanel = ({ search, setSearch }) => {
    return (
        <label className={classes.inputContainer}>
            <IoSearch />
            <input 
                placeholder='Search for a country...'
                type="search" 
                value={search}
                className={classes.input}
                onChange={e => setSearch(e.target.value)}
            />
        </label>
    );
};

export default SearchPanel;