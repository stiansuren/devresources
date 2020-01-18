import { NextPage } from "next";
import { Inspiration } from "../components/inspiration";
import { Categories } from "../components/categories/categories";
import "../components/global-styles.scss";
import firebase from "../utils/firebase";
import { Mixpanel } from "../utils/mixpanel";
import { motion } from "framer-motion";
import { variants } from "../utils/motion-variables";

type Link = {
  title: string;
  id: string;
  url: string;
  tags: Array<Tags>;
};

type Tags = {
  tag: string;
};

type ContentProps = {
  links: Array<Link>;
};

const Home: NextPage = ({ links }: any) => {
  const tagTypes = getTagTypes({ links });

  const inspirationLinks = links.filter((link: any) =>
    link.tags.includes("Inspiration")
  );

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {Mixpanel.track("Page load")}
      <Categories tagTypes={tagTypes} />
      <Inspiration links={inspirationLinks} />
    </motion.div>
  );
};

Home.getInitialProps = async () => {
  let links: Array<any> = [];
  try {
    const snapshot = await firebase
      .firestore()
      .collection("resources")
      .orderBy("title")
      .get();
    links = snapshot.docs.map(doc => {
      const data = doc.data();
      const id = doc.id;
      return {
        title: data.title,
        url: data.url,
        id: id,
        tags: data.tags
      };
    });
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
  return { links };
};

const getTagTypes = ({ links }: ContentProps) => {
  const tags: Array<Tags> = [];
  links.map(link =>
    link.tags.map(tag => tag.toString() != "Inspiration" && tags.push(tag))
  );
  return tags
    .filter((element, index) => {
      return tags.indexOf(element) === index;
    })
    .sort();
};

export default Home;
