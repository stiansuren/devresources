import { NextPage } from 'next';
import { HeadTag } from '../components/head-tag';
import Header from '../components/header/header';
import { Content } from '../components/content/content';
import '../components/global-styles.scss';
import firebase from '../utils/firebase';

const Home: NextPage = ({ links } :any) => (
    <>
      <HeadTag/>
      <Header/>
      <Content links={links} />
    </>
);

Home.getInitialProps = async () => {
  let links :Array<any>= [];
  try {
    const snapshot = await firebase.firestore().collection('resources').orderBy('title').get();
    links = snapshot.docs.map(doc => {
      const data = doc.data();
      const id = doc.id;
      return { 
        title: data.title, 
        url: data.URL,
        id: id,
        tags: data.tags,
      };
    });
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
  return { links };
};

export default Home;