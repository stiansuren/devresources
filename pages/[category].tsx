import { Header } from '../components/header';
import { Content } from '../components/content/content';
import { CategoryHeader } from '../components/category-header';
import firebase from '../utils/firebase';

export default function CategoryView ({ links } :any) {
    return <>
        <Header/>
        <CategoryHeader/>
        <Content links={links}/>
    </>
}


CategoryView.getInitialProps = async (context: any) => {
    const { category } = context.query;
    let links :Array<any>= [];
    try {
      const snapshot = await firebase.firestore().collection('resources').where('tags', 'array-contains', `${category}`).get();
      links = snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return { 
          title: data.title, 
          url: data.url,
          id: id,
          tags: data.tags,
        };
      });
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
    return { links };
};