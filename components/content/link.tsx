import { Tags } from './tags';
import { Mixpanel } from '../../utils/mixpanel';

type LinkProps = {
    link: Link,
    tagTypes: Array<Tags>
}

type Link = {
    title: string,
    id: string,
    url: string,
    tags: Array<Tags>
}

type Tags = {
    tag: string
}

export const Link = ({ link, tagTypes } :LinkProps) => {
    return <li className="links__item">
        <a className="links__link" onClick={() => Mixpanel.track(link.title)} href={link.url}>{link.title}</a>
        <Tags tags={link.tags} tagTypes={tagTypes}/>
    </li>
}