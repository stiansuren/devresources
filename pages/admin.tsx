import { NextPage } from 'next';
import firebase from '../utils/firebase';
import { HeadTag } from '../components/head-tag';
import { ContentList } from '../admin/contentList';
import { AddLink } from '../admin/addLink';
import '../components/global-styles.scss';
import '../admin/admin.scss';
import { AddField } from '../admin/addField';
import { useState, useEffect } from 'react';

const Admin: NextPage = ({ initialLinks } :any) => {
    const [links, setLinks] = useState(initialLinks);

    const handleUpdate = async () => {
        const updatedLinks = await getLinksFromDatabase();
        setLinks(updatedLinks);
    };

    useEffect(()=>{
        console.log(links[3]);
    }, [links]);

    return <>
        <HeadTag/>
        <ContentList handleUpdate={handleUpdate} links={links} />
        <AddLink handleUpdate={handleUpdate} />
        <AddField />
    </>
}

const getLinksFromDatabase = async () => {
    let links :Array<any>= [];
    try {
      const snapshot = await firebase.firestore().collection('resources').orderBy('title').get();
      links = snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return { 
          title: data.title, 
          url: data.url,
          id: id,
          tags: data.tags,
          date: data.date
        };
      });
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
    return links;
}

Admin.getInitialProps = async () => {
    const initialLinks = await getLinksFromDatabase();
    return { initialLinks };
};

export default Admin;