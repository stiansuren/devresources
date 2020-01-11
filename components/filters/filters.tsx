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
        {activeTags.length > 0 && <button className="filters__button filters__button__reset" onClick={() => resetFilter()}>See all categories</button>}
    </div>;
}