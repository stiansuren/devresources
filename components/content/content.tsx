import React, {useEffect, useState} from "react";
import { Filters } from '../filters';
import './content.scss';
import { Mixpanel } from '../../utils/mixpanel';

type Link = {
    title: string,
    id: string,
    url: string,
    tags: Array<Tags>
}

type Tags = {
    tag: string
}

type TagsProps = {
    tags: Array<Tags>,
    tagTypes: Array<Tags>
}

type LinkProps = {
    link: Link,
    tagTypes: Array<Tags>
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

const Tags = ({ tags, tagTypes } :TagsProps) => {
    const colors = ['orange', 'purple', 'green'];
    return <div className='links__tags'>
        {tags.map((tag) => {
            const colorIndex = tagTypes.findIndex(t => t === tag) % (colors.length);
            const color = colors[colorIndex];
            return <p key={tag.toString()} className={`links__tag links__tag--${color}`}>{tag}</p>
        }
        )}
    </div>
}

const Link = ({ link, tagTypes } :LinkProps) => {
    return <li className="links__item">
        <a className="links__link" onClick={() => Mixpanel.track(link.title)} href={link.url}>{link.title}</a>
        <Tags tags={link.tags} tagTypes={tagTypes}/>
    </li>
}

const getTagTypes = ({ links }: ContentProps) => {
    const tags :Array<Tags> = [];
    links.map(link => link.tags.map(tag => tags.push(tag)));
    return tags.filter((element, index) => {
        return tags.indexOf(element) === index;
    });
};