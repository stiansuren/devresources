import * as firebase from 'firebase/app';

type Link = {
    title: string,
    id: string,
    url: string,
    tags: Array<Tags>
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
    return <tr className="links__item">
        <td><a className="links__link" href={link.url}>{link.title} &rarr;</a></td>
        <td>{link.tags.join(", ")}</td>
        <td><button onClick={() => deleteFromDatabase(link.id)}>Delete</button></td>
    </tr>
}

const deleteFromDatabase = async (id :string) => {
    firebase.firestore().collection('resources').doc(id).delete()
    .then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

export const ContentList = ({ links } :ContentProps) => {
    return <table className="links">
        <tbody>
            <tr>
                <th>Links</th>
                <th>Tags</th>
                <th>Actions</th>
            </tr>
            {links.map((link :Link) => {
                return <Link key={link.id} link={link}/>
            })}
        </tbody>
    </table>
}