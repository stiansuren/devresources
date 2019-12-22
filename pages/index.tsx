import { NextPage } from 'next';
import { HeadTag } from '../components/head-tag';
import { Logo } from '../components/logo/logo';
import { Content } from '../components/content/content';
import '../components/global-styles.scss';
import firebase from '../utils/firebase';
import { Mixpanel } from '../utils/mixpanel';

const Home: NextPage = ({ links } :any) => (
    <>
      {Mixpanel.track('Page load')}
      <HeadTag/>
      <Logo/>
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

export default Home;