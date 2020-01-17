import { HeadTag } from "../components/head-tag";
import { Header } from "../components/header";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps, router }: any) {
  return (
    <>
      <HeadTag />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default App;
