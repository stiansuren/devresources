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

Home.getInitialProps = async function () {
  let links :any = await firebase.firestore().collection('resources').get()
    .then(function(querySnapshot) {
      let l :Array<any>= [];
        querySnapshot.forEach(function(doc) {
            const data = {title: doc.data().title, URL: doc.data().URL, id: doc.id, tags: doc.data().tags};
            l = [...l, data];
            l.sort((a, b) => (a.title > b.title) ? 1 : -1);
        });
        return l;
    })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
      return [];
  });

  return {
    links: links
  }
}

export default Home;