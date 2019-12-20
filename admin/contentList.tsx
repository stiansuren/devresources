import * as firebase from 'firebase/app';

type Link = {
    title: string,
    id: string,
    url: string,
    tags: Array<Tags>,
    date: string
}

type Tags = {
    tag: string
}

type LinkProps = {
    link: Link
}

type ContentProps = {
    links: Array<Link>
}

const Link = ({ link } :LinkProps) => {
    return <tr>
        <td><a href={link.url}>{link.title}</a></td>
        <td>{link.tags.join(", ")}</td>
        <td>{link.date}</td>
        <td><button onClick={() => deleteFromDatabase(link.id)}>Delete</button></td>
    </tr>
}

const deleteFromDatabase = async (id: string) => {
    try {
        await firebase.firestore().collection('resources').doc(id).delete();
        console.log("Document successfully deleted!");
    } catch (e) {
        console.log('Error removing document: ', e);
    }
}

export const ContentList = ({ links } :ContentProps) => {
    return <table>
        <tbody>
            <tr>
                <th>Links</th>
                <th>Tags</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
            {links.map((link :Link) => {
                return <Link key={link.id} link={link}/>
            })}
        </tbody>
    </table>
}