import { Mixpanel } from '../../utils/mixpanel';

type LinkProps = {
    link: Link
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

export const Link = ({ link } :LinkProps) => {
    return (
    <a className="links__link" onClick={() => Mixpanel.track(link.title)} href={link.url}>
        {link.title}
    </a>)
}