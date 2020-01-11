import React from "react";
import {FilterButton} from './filter-button';
import './filters.scss';

type Tags = {
    tag: string
}

type FilterProps = {
    tagTypes: Array<Tags>,
    activeTags: Array<string>,
    filterLinks: (tag:any) => void,
    resetFilter: () => void
}

export const Filters = ({ filterLinks, resetFilter, tagTypes, activeTags } :FilterProps) => {
    
    return <div className="filters">
        {tagTypes.map(tag => <FilterButton tag={tag.toString()} active={activeTags.includes(tag.toString())} key={tag.toString()} onClick={() => filterLinks(tag)}/>)}
        <button className="filters__button" onClick={() => resetFilter()}>Reset filter</button>
    </div>;
}