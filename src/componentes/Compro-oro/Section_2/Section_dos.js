import React from "react";
import styles from "./sectionDos.module.css";
import Image from "next/image";

const Section_dos = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.bloqueSuperior}>
        <h2>
          Disfruta de ventajas exclusivas en{" "}
          <span className={styles.linea}>quickgold</span>
        </h2>
        <p>
          *Para realizar una venta de oro es necesario ser mayor de edad y
          aportar DNI en vigor.
        </p>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img
              src="https://quickgold.es/imagenVentaja1.png"
              alt="a cómo está el oro"
            />
          </div>

          <p>Mejor servicio y precio garantizado.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img
              src="https://quickgold.es/imagenVentaja2.png"
              alt="precio oro"
            />
          </div>

          <p>Precio del oro siempre actualizado.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img
              src="https://quickgold.es/imagenVentaja3.png"
              alt="tiendas compro oro"
            />
          </div>

          <p>Más de 60 tiendas para realizar tu venta de oro.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img
              src="https://quickgold.es/imagenVentaja4.png"
              alt="vender oro"
            />
          </div>

          <p>Atención personalizada.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img
              src="https://quickgold.es/imagenVentaja5.png"
              alt="vender joyas"
            />
          </div>

          <p>Dinero en efectivo al instante.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img
              src="https://quickgold.es/imagenVentaja6.png"
              alt="tasación oro"
            />
          </div>

          <p>Tasación profesional, justa y segura.</p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
