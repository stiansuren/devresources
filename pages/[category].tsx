import { Content } from "../components/content/content";
import { CategoryHeader } from "../components/category-header";
import { motion } from "framer-motion";
import { variants } from "../utils/motion-variables";
import firebase from "../utils/firebase";

export default function CategoryView({ links }: any) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CategoryHeader />
      <Content links={links} />
    </motion.div>
  );
}

CategoryView.getInitialProps = async (context: any) => {
  const { category } = context.query;
  let links: Array<any> = [];
  try {
    const snapshot = await firebase
      .firestore()
      .collection("resources")
      .where("tags", "array-contains", `${category}`)
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
