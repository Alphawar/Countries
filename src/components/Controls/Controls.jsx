import React, { useEffect, useState } from 'react';
import classes from './Controls.module.css';
import SearchPanel from './SearchPanel/SearchPanel';
import SelectPanel from './SelectPanel/SelectPanel';

const Controls = ({handleSearch}) => {

    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

    useEffect(() => {
        const selectedRegion = region?.value || ''
        handleSearch(search, selectedRegion)
        //eslint-disable-next-line
    }, [search, region])

    return (
        <div className={classes.wrapper}>
            <SearchPanel search={search} setSearch={setSearch}/>
            <SelectPanel 
                region={region}
                setRegion={setRegion}
            />
        </div>
    );
};

export default Controls;