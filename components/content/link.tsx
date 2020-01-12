import { Mixpanel } from '../../utils/mixpanel';
import { motion } from "framer-motion"

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
    return <li className="links__item">
        <motion.a whileHover={{ skewX: 1.1 }} className="links__link" onClick={() => Mixpanel.track(link.title)} href={link.url}>{link.title}</motion.a>
    </li>
}