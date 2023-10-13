import React from "react";
import styles from "./footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Footer = () => {
  return (
    <footer className={styles.contenedorFooter}>
      <div className={styles.contenedorContenidoFooter}>
        <figure>
          <a
            href="https://quickgold.es"
            title="texto"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src="https://quickgold.es/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={221}
              height={42}
            />
          </a>
        </figure>
        <div className={styles.contenedorEnlaces}>
          <div className={styles.enlaces}>
            <h3>servicios</h3>
            <ul>
              <li>
                <a
                  title="Ir a compro oro"
                  href="https://quickgold.es/compro-oro"
                >
                  Compra de oro
                </a>
              </li>
              <li>
                <a
                  title="Ir a compra divisa"
                  href="https://quickgold.es/cambio-divisas"
                >
                  Compra de divisas
                </a>
              </li>
              <li>
                <a
                  title="Ir a compra plata"
                  href="https://quickgold.es/compro-plata"
                >
                  Compra de plata
                </a>
              </li>
              <li>
                <a
                  title="Ir a compra diamantes"
                  href="https://quickgold.es/vender-diamantes"
                >
                  Compra de diamantes
                </a>
              </li>
              <li>
                <a
                  title="Ir oro de inversión"
                  href="https://quickgold.es/invertir-en-oro"
                >
                  Oro de inversión
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h3>acerca de nosotros</h3>
            <ul>
              <li>
                <a
                  title="Ir a conoce quickgold"
                  href="https://quickgold.es/expansion"
                >
                  Conoce Quickgold
                </a>
              </li>
              {/*<li>
                <a
                  title="Ir a preguntas frecuentes"
                  href="https://quickgold.es/preguntas-frecuentes"
                >
                  Preguntas frecuentes
                </a>
  </li>*/}
              <li>
                <a
                  title="Ir a localizador tiendas"
                  href="https://quickgold.es/tiendas"
                >
                  Localizador de tiendas
                </a>
              </li>
              <li>
                <a
                  title="Ir a mapa del sitio"
                  href="https://quickgold.es/tiendas"
                >
                  Mapa del sitio
                </a>
              </li>
              {/*<li>
                <a title="Ir a contacto" href="https://quickgold.es/contacto">
                  Contacto
                </a>
</li>*/}
              {/*<li>
                <a title="Ir a blog" href="https://quickgold.es/blog">
                  Blog
                </a>
  </li>*/}
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h3>únete a quickgold</h3>
            <ul>
              <li>
                <a
                  title="Ir a abrir tienda quickgold"
                  href="https://quickgold.es/expansion"
                >
                  Abrir un tienda Quickgold
                </a>
              </li>
              {/*<li>
                <a title="texto" href="/">
                  Dossier Franquicia
                </a>
</li>*/}
              <li>
                <a
                  title="Ir a trabaja con nosotros"
                  href="https://quickgold.es/trabaja-con-nosotros"
                >
                  Trabaja con nosotros
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <p>Llama gratis al</p>
            <a title="Teléfono" href="te:900 373 629">
              900 373 629
            </a>
            <div className={styles.iconosRedes}>
              <a
                target="_blank"
                title="Linkedin"
                href="https://www.linkedin.com/company/quickgold"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                title="Twitter"
                className={styles.twitter}
                href="https://twitter.com/quickgoldqg"
              >
                <TwitterIcon />
              </a>
              <a
                title="Facebook"
                href="https://www.facebook.com/quickgold.es/"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                title="Instagram"
                href="https://www.instagram.com/quickgold.es/"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.politicaPrivacidad}>
          <a
            title="política de privacidad"
            href="https://quickgold.es/politica-de-privacidad"
          >
            <p>
              <LockIcon /> política de privacidad
            </p>
          </a>
          <a
            target="_blank"
            title="política de calidad"
            href="https://quickgold.es/doc/politica-calidad-quickgold.pdf"
          >
            <p>
              <CheckCircleIcon />
              política de calidad
            </p>
          </a>
        </div>
        <hr className={styles.linea} />
        <p className={styles.registro}>
          © 2023 Quickgold | GRUNGO, S.L. - B53910071 - RONDA AUGUSTE Y LOUIS
          LUMIERE, 23, NAVE 9 46980 PATERNA, VALENCIA - central@quickgold.es -
          900 373 629 Registro Mercantil de Valencia , Tomo 9220, Libro 6503,
          Folio 215, Hoja V-140170, Inscripción 2ª.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
