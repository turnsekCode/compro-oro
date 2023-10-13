import React from "react";
import styles from "./header.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuOrdenador from "../MenuOrdenador/MenuOrdenador";
import MenuMobil from "../MenuMobil/MenuMobil";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ menu_list, sticky, stickyRef }) => {
  const [state, setState] = React.useState({ right: false });
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };
  return (
    <header className={styles.header} id="to_top">
      <nav className={styles.contenedorLogo}>
        <figure>
          <a
            href="https://quickgold.es"
            title="Logo Quickgold"
            rel="noopener noreferrer"
          >
            <img
              src="/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={163}
              height={30}
            />
          </a>
        </figure>
        <div className={styles.menuHamburquesa}>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                aria-label="Menu Hamburguesa"
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                className={styles.contenidoMenuMobil}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {" "}
                <div className={styles.closeBoton}>
                  {" "}
                  <CloseIcon onClick={toggleDrawer(anchor, false)} />
                </div>
                <MenuMobil menu_list={menu_list} setState={setState} />
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.contenedorRedes}>
          <div className={styles.contenedorIconos}>
            <a
              target="_blank"
              className={styles.linkedin}
              href="https://www.linkedin.com/company/quickgold"
              title="Linkedin"
            >
              <img
                src="/Vector12.png"
                alt="Quickgold Logo"
                className={styles.vector}
                width={12}
                height={12}
              />
              <LinkedInIcon />
            </a>
            <a
              href="https://www.facebook.com/quickgold.es/"
              title="Facebook"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/quickgold.es/"
              title="Instagram"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className={styles.botonLlamar}>
            <a href="tel:900 373 629" title="Teléfono">
              LLAMA GRATIS AL 900 373 629
            </a>
          </div>
        </div>
      </nav>
      <MenuOrdenador
        menu_list={menu_list}
        sticky={sticky}
        stickyRef={stickyRef}
      />
    </header>
  );
};

export default Header;
