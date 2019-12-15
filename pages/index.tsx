import { NextPage } from 'next';
import { HeadTag } from '../components/head-tag';
import Header from '../components/header';
import { Content } from '../components/content';
import '../components/global-styles.scss';


const Home: NextPage = () => (
    <>
      <HeadTag/>
      <Header/>
      <Content/>
    </>
);

export default Home;