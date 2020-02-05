import { AuthProvider } from "../admin/authContext";
import { HeadTag } from "../components/head-tag";
import { Header } from "../components/header";
import { AnimatePresence } from "framer-motion";
import { Footer } from "../components/footer/footer";
import "../components/global-styles.scss";

function App({ Component, pageProps, router }: any) {
  return (
    <>
      <HeadTag />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <AuthProvider>
          <Component {...pageProps} key={router.route} />
        </AuthProvider>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
