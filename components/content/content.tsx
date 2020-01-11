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
    return <>
        <p>{links.length === 1 ? `1 paper` : `${links.length} papers`}</p>
        <ul className="links">
            {links.map((link :Link) => {
                return <Link key={link.id} link={link}/>
            })}
        </ul>
    </>
}