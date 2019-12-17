import React from "react";
import './content.scss';

interface Link {
    title: string,
    id: string,
    URL: string,
    tags: Array<string>
}

export const Content = ({ links } :any) => {
    return <div className="links">
        {links.map((link :Link) => {
            return <li className="links__link" key={link.id}>
                <a className="links__link__title" href={link.URL}>{link.title} -></a>
                {link.tags.map((tag)=> <p key={link.id + tag} className="links__link__tag">{tag}</p>)}
            </li>
        })}
    </div>
}