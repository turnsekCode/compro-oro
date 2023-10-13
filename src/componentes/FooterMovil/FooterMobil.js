import React, { useState } from "react";
import styles from "./footerMobil.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FooterMobil = () => {
  const [menuAbierto, setMenuAbierto] = useState(null);
  const [menuAbierto2, setMenuAbierto2] = useState(null);
  const [menuAbierto3, setMenuAbierto3] = useState(null);
  return (
    <footer className={styles.footer}>
      <figure>
        <a
          href="https://quickgold.es/"
          style={{ marginBottom: "14px" }}
          title="texto"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="https://quickgold.es/logo.png"
            alt="Quickgold Logo"
            className={styles.logo}
            width={163}
            height={30}
          />
        </a>
      </figure>
      <div className={styles.contenedorRedes}>
        <a className={styles.telefono} href="tel:900 373 629">
          900 373 629
        </a>
        <div className={styles.redes}>
          <a
            title="Linkedin"
            target="_blank"
            href="https://www.linkedin.com/company/quickgold"
          >
            <LinkedInIcon />
          </a>
          <a
            title="Facebook"
            target="_blank"
            href="https://www.facebook.com/quickgold.es/"
          >
            <FacebookIcon />
          </a>
          <a
            title="Instagram"
            target="_blank"
            href="https://www.instagram.com/quickgold.es/"
          >
            <InstagramIcon />
          </a>
          <a
            title="Twitter"
            target="_blank"
            href="https://twitter.com/quickgoldqg"
          >
            <TwitterIcon />
          </a>
        </div>
        <a
          title="política de privacidad"
          href="https://quickgold.es/politica-de-privacidad"
        >
          <p>política de privacidad</p>
        </a>
        <br></br>
        <a
          title="política de calidad"
          href="https://quickgold.es/politica-de-calidad"
        >
          <p>política de calidad</p>
        </a>
        {/*<p>dossier Franquicia</p>*/}
      </div>
      <div className={styles.contenedorMenuFooter}>
        <div
          className={styles.listaMenu}
          onClick={() => {
            setMenuAbierto(!menuAbierto);
            setMenuAbierto3(false);
            setMenuAbierto2(false);
          }}
        >
          <div className={styles.listaMenuTitulo}>
            <p>SERVICIOS</p>
            <KeyboardArrowDownIcon />
          </div>
          <ul
            className={
              menuAbierto
                ? `${styles.ul} ${styles.menuActive} ${styles.menuActivo1}`
                : `${styles.ul}`
            }
          >
            <li>
              <a href="https://quickgold.es/compro-oro" title="Ir a compro oro">
                Compra de oro
              </a>
            </li>
            <li>
              <a
                href="https://quickgold.es/cambio-divisas"
                title="Ir a cambiar divisa"
              >
                Cambio divisas
              </a>
            </li>
            <li>
              <a
                href="https://quickgold.es/compro-plata"
                title="Ir a compro plata"
              >
                Compro plata
              </a>
            </li>
            <li>
              <a
                href="https://quickgold.es/vender-diamantes"
                title="Ir a compra diamantes"
              >
                Compra de diamantes
              </a>
            </li>
            <li>
              <a
                href="https://quickgold.es/invertir-en-oro"
                title="Ir a oro de inversión"
              >
                Oro de inversion
              </a>
            </li>
          </ul>
        </div>
        <div
          className={styles.listaMenu}
          onClick={() => {
            setMenuAbierto2(!menuAbierto2);
            setMenuAbierto(false);
            setMenuAbierto3(false);
          }}
        >
          <div className={styles.listaMenuTitulo}>
            <p>ACERCA DE NOSOTROS</p>
            <KeyboardArrowDownIcon />
          </div>

          <ul
            className={
              menuAbierto2
                ? `${styles.ul} ${styles.menuActive} ${styles.menuActivo1}`
                : `${styles.ul}`
            }
          >
            <li>
              <a
                href="https://quickgold.es/expansion"
                title="Ir a conoce quickgold"
              >
                Conoce Quickgold
              </a>
            </li>
            {/*<li>
              <a
                href="https://quickgold.es/preguntas-frecuentes"
                title="Ir a preguntas frecuentes"
              >
                Preguntas frecuentes
              </a>
          </li>*/}
            <li>
              <a
                href="https://quickgold.es/tiendas"
                title="Ir a localizador de tiendas"
              >
                Localizador de tiendas
              </a>
            </li>
            <li>
              <a href="https://quickgold.es" title="Ir a mapa del sitio">
                Mapa del sitio
              </a>
            </li>
            {/* <li>
              <a href="https://quickgold.es/contacto" title="Ir a contacto">
                Contacto
              </a>
        </li>*/}
            {/* <li>
              <a href="https://quickgold.es/blog/" title="Ir a blog">
                Blog
              </a>
          </li>*/}
          </ul>
        </div>
        <div
          className={styles.listaMenu}
          onClick={() => {
            setMenuAbierto3(!menuAbierto3);
            setMenuAbierto(false);
            setMenuAbierto2(false);
          }}
        >
          <div className={styles.listaMenuTitulo}>
            <p>ÚNETE A QUICKGOLD</p>
            <KeyboardArrowDownIcon />
          </div>
          <ul
            className={
              menuAbierto3
                ? `${styles.ul} ${styles.menuActive} ${styles.menuActivo1}`
                : `${styles.ul}`
            }
          >
            <li>
              <a
                href="https://quickgold.es/expansion"
                title="Ir abrir tienda quickgold"
              >
                Abrir una tienda Quickgold
              </a>
            </li>
            {/*<li>
              <a href="/" title="Dossier">
                Dossier Franquicia
              </a>
          </li>*/}
            <li>
              <a
                href="https://quickgold.es/trabaja-con-nosotros"
                title="Ir a trabaja con nosotros"
              >
                Trabaja con nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.textoFooter}>
        © 2023 Quickgold | GRUNGO, S.L. - B53910071 - RONDA AUGUSTE Y LOUIS
        LUMIERE, 23, NAVE 9 46980 PATERNA, VALENCIA - central@quickgold.es - 900
        373 629 Registro Mercantil de Valencia , Tomo 9220, Libro 6503, Folio
        215, Hoja V-140170, Inscripción 2ª. Política de privacidad · Política de
        Calidad
      </p>
    </footer>
  );
};

export default FooterMobil;
