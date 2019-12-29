import React from "react";
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

    const active = (tag:any) => activeTags.includes(tag) ? "filters__tag--active" : "";
    
    return <div className="filters">
        <h4 className="filters__header">Filters</h4>
        {tagTypes.map(tag => <button className={`filters__tag ${active(tag)}`} key={tag.toString()} onClick={() => filterLinks(tag)}>{tag}</button>)}
        <button onClick={() => resetFilter()}>Reset filter</button>
    </div>;
}