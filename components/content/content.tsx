import React, {useEffect, useState} from "react";
import { Filters } from '../filters';
import { Link } from './link';
import './content.scss';

type Link = {
    title: string,
    id: string,
    url: string,
    tags: Array<Tags>
}

type Tags = {
    tag: string
}

type ContentProps = {
    links: Array<Link>
}

export const Content = ({ links } :ContentProps) => {
    const initialTagState: Array<string> = [];
    const [activeLinks, setLinks] = useState(links);
    const [activeTags, setTags] = useState(initialTagState);

    const filterLinks = (tag:any) => {
        setTags(() => activeTags.includes(tag) ? activeTags.filter((t) => t != tag) : [...activeTags, tag]);
    }

    const resetFilter = () => {
        setTags(initialTagState);
    }

    useEffect(()=>{
        setLinks(() => activeTags.length > 0 ? links.filter((link) => {
            return link.tags.some((t) => activeTags.includes(t.toString()))
        }) : links)
    }, [activeTags]);

    const tagTypes = getTagTypes({links});

    return <>
        <Filters tagTypes={tagTypes} resetFilter={resetFilter} filterLinks={filterLinks} activeTags={activeTags}/>
        <ul className="links">
            {activeLinks.map((link :Link) => {
                return <Link key={link.id} link={link} tagTypes={tagTypes}/>
            })}
        </ul>
    </>
}

const getTagTypes = ({ links }: ContentProps) => {
    const tags :Array<Tags> = [];
    links.map(link => link.tags.map(tag => tags.push(tag)));
    return tags.filter((element, index) => {
        return tags.indexOf(element) === index;
    });
};