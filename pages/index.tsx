import { NextPage } from 'next';
import { HeadTag } from '../components/head-tag';
import Header from '../components/header';
import { AllContent } from '../components/all-content';
import '../components/global-styles.scss';

const Home: NextPage = () => (
    <>
      <HeadTag/>
      <Header/>
      <AllContent/>
    </>
);

export default Home;