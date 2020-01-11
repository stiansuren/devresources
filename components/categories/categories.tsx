import React from "react";
import {CategoryButton} from './category-button';
import './categories.scss';

type Tags = {
    tag: string
}

type CategoryProps = {
    tagTypes: Array<Tags>
}

export const Categories = ({ tagTypes } :CategoryProps) => {
    return <div className="categories">
        <h2 className="categories__header">Categories</h2>
        <div className="categories__buttons">
            {tagTypes.map(tag => <CategoryButton tag={tag.toString()} key={tag.toString()}/>)}
        </div>
    </div>
}