import styles from "./layout.module.css";
import Header from "../Cabecera/Header";
import Footer from "../Footer/Footer";
import FooterMobil from "../FooterMovil/FooterMobil";
import useSticky from "../../utilities/useSticky";
import ScrollToTop from "react-scroll-to-top";

export default function Layout({ children, menu_list, ciudad }) {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <main className={styles.contenedor}>
        <Header menu_list={menu_list} sticky={sticky} stickyRef={stickyRef} />
        {children}
        <FooterMobil /> <Footer />
        <ScrollToTop smooth />
      </main>
    </>
  );
}
