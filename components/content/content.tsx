import React from "react";
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
    tags: Array<Tags>
}

type LinkProps = {
    link: Link
}

type ContentProps = {
    links: Array<Link>
}

const Tags = ({ tags } :TagsProps) => {
    const tagTypes = ['CSS', 'React', 'Animations', 'WebGL', 'JS', 'P5.js', 'Shaders', 'SVG', 'HTML'];
    const colors = ['orange', 'purple', 'green']
    return <div className="links__tags">
    {tags.map((tag) => {
        const colorIndex = tagTypes.findIndex(t => t === tag.toString()) % (colors.length);
        const color = colors[colorIndex];
        return <p key={tag.toString()} className={`links__tag links__tag--${color}`}>{tag}</p>}
        )}
    </div>
}

const Link = ({ link } :LinkProps) => {
    return <li className="links__item">
        <a className="links__link" onClick={() => Mixpanel.track(link.title)} href={link.url}>{link.title}</a>
        <Tags tags={link.tags}/>
    </li>
}

export const Content = ({ links } :ContentProps) => {
    return <ul className="links">
        {links.map((link :Link) => {
            return <Link key={link.id} link={link}/>
        })}
    </ul>
}