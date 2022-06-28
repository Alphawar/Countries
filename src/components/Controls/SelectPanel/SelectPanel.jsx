import React from 'react';
import Select from 'react-select';
import classes from './SelectPanel.module.css';

const SelectPanel = ({ region, setRegion }) => {

    const options = [
        {value: 'Africa', label: 'Africa'},
        {value: 'America', label: 'America'},
        {value: 'Asia', label: 'Asia'},
        {value: 'Europe', label: 'Europe'},
        {value: 'Oceania', label: 'Oceania'}
    ]
    
    const styles = {
        options: (styles, state) => ({
            ...styles,
            cursor: 'pointer',
            color: 'var(--colors_text)',
            backgroundColor: 'var(--colors_bg)',
            "&:hover": {
                backgroundColor: state.isFocused ? "red" : "pink"
            },
        }),
        option: (styles, { isSelected }) => ({
            ...styles,
            backgroundColor: isSelected ? 'blue' : 'none',
        }),
        control: styles => ({
            ...styles,
            backgroundColor: 'var(--coolors_ui_base)',
            color: 'var(--colors_text)',
            borderRaduis: '0.5rem',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--colors_shadow)',
            height: '50px',
        }),
        dropdownIndicator: (styles, state) => ({
            ...styles,
            transition: '0.3s',
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)'
        }),
        singleValue: styles => ({
            ...styles,
            color: "var(--colors_text)",
        }),
        menu: styles => ({
            ...styles,
            backgroundColor: "var(--colors_bg)",
            color: "var(--colors_text)",
        }),
    }
    return (
        <Select 
            options={options}
            styles={styles}
            isClearable
            isSearchable={false}
            placeholder="Filter by region"
            value={region}
            onChange={setRegion}
            className={classes.select}
        />
    );
};

export default SelectPanel;