import React, { useState } from "react";
import styles from "./menuMobil.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MenuMobil = ({ menuAbieto, menu_list }) => {
  const datos = menu_list?.items;
  const [subMenuAbieto, setSubMenuAbierto] = useState(false);
  const [subMenuTienda, setSubMenuTienda] = useState(false);
  return (
    <nav
      className={
        menuAbieto
          ? `${styles.contenedorMenuMobil} ${styles.menuActive1}`
          : `${styles.contenedorMenuMobil} `
      }
    >
      <div className={styles.menuMobil}>
        <div className={styles.contenedorListasMenu}>
          <div className={styles.listasMenu}>
            <a href="https://quickgold.es" title="Ir a quickgold">
              INICIO
            </a>
            <div
              className={styles.servicios}
              onClick={() => {
                setSubMenuTienda(!subMenuTienda), setSubMenuAbierto(false);
              }}
            >
              <a
                className={styles.serviciosTiendas}
                href="https://quickgold.es/tiendas"
              >
                Tiendas
              </a>
              {subMenuTienda ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <div
              className={
                subMenuTienda
                  ? `${styles.subServicios} ${styles.subMenuActivo}`
                  : `${styles.subServicios} `
              }
            >
              {datos?.map((tienda, index) => (
                <a key={index} href={`${tienda.url}`} title={tienda?.title}>
                  {tienda?.title}
                </a>
              ))}
            </div>
            <div
              className={styles.servicios}
              onClick={() => {
                setSubMenuAbierto(!subMenuAbieto), setSubMenuTienda(false);
              }}
            >
              servicios
              {subMenuAbieto ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <div
              className={
                subMenuAbieto
                  ? `${styles.subServicios} ${styles.subMenuActivoServicios}`
                  : `${styles.subServicios} `
              }
            >
              <a href="https://quickgold.es/compro-oro" title="Ir a compro oro">
                COMPRO ORO
              </a>
              <a
                href="https://quickgold.es/cambio-divisas"
                title="Ir a cambio de divisa"
              >
                CAMBIO DE DIVISAS
              </a>
              <a
                href="https://quickgold.es/empeno-de-joyas"
                title="Ir a empeño de joyas"
              >
                EMPEÑO DE JOYAS
              </a>
              <a href="https://quickgold.es/compro-plata">COMPRA DE PLATA</a>
              <a href="https://quickgold.es/joyeria-de-ocasion">
                JOYERÍA OCASIÓN
              </a>
              <a href="https://quickgold.es/invertir-en-oro">
                ORO DE INVERSIÓN
              </a>

              <a href="https://quickgold.es/vender-diamantes">
                COMPRA DE DIAMANTES
              </a>
            </div>

            {/*<a
              className={styles.contacto}
              href="https://quickgold.es/contacto"
              title="Ir a contacto"
            >
              CONTACTO
            </a>*/}
          </div>
          <div className={styles.menuInferiorMobil}>
            <ul>
              <li>
                <a
                  href="https://quickgold.es/expansion"
                  title="ABRIR TIENDA QUICKGOLD"
                >
                  ABRIR TIENDA QUICKGOLD
                </a>
              </li>
              <li>
                <a
                  href="https://quickgold.es/trabaja-con-nosotros"
                  title="TRABAJA CON NOSOTROS"
                >
                  TRABAJA CON NOSOTROS
                </a>
              </li>
              <li>
                <a
                  href="https://quickgold.es/preguntas-frecuentes"
                  title="PREGUNTA FRECUENTES"
                >
                  PREGUNTA FRECUENTES
                </a>
              </li>
              {/* <li>
                <a href="/blog/" title="">
                  BLOG
                </a>
              </li>*/}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuMobil;
