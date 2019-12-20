import { Link, LinkProps } from './link';

type ContentProps = {
    links: Array<LinkProps>,
    handleUpdate: () => Promise<void>
}

export const ContentList = ({ links, handleUpdate } :ContentProps) => {
    return <table>
        <tbody>
            <tr>
                <th>Links</th>
                <th>Tags</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
            {links.map((link :LinkProps) => {
                return <Link key={link.id} handleUpdate={handleUpdate} link={link}/>
            })}
        </tbody>
    </table>
}