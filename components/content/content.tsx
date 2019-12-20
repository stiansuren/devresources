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
    return <div className="links__tags">
        {tags.map((tag) => <p key={tag.toString()} className="links__tag">{tag}</p>)}
    </div>
}

const Link = ({ link } :LinkProps) => {
    return <li className="links__item">
        <a className="links__link" onClick={() => Mixpanel.track(link.title)} href={link.url}>{link.title} &rarr;</a>
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