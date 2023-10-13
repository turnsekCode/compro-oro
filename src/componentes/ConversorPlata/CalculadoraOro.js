import { useState, useEffect } from "react";
import styles from "./conversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CalculadoraOro = ({ ciudad, ListadoCiudades }) => {
  //const nombreCiudad = ciudad?.acf?.ciudad_oro;
  //const nombreCiudad = "alcaladehenares";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [ciudadSelect, setCiudadSelect] = useState("");
  useEffect(() => {
    fetch(`https://quickgold.es/archivos-cache/Fixing${ciudadSelect}.txt`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(true);
      });
  }, [ciudadSelect]);
  const [valorInput, setValorInput] = useState("0.00");
  const [valorSelect, setValorSelect] = useState("0.00");
  const [masDe, setMasDe] = useState(true);
  const precio24k = data?.result?.Tarifas?.Oro[12].Productos[0].Precio / 1000;
  const precio18k = data?.result?.Tarifas?.Oro[2].Productos[0].Precio / 1000;
  const precio14k = data?.result?.Tarifas?.Oro[10].Productos[0].Precio / 1000;
  //const masDeOro = ciudad?.acf?.precio_mas_de_oro;
  const masDeOro = 0.35;
  const precioMas24k = (precio24k + parseFloat(masDeOro)).toFixed(2);
  const precioMas18k = (precio18k + parseFloat(masDeOro)).toFixed(2);
  const precioMas14k = (precio14k + parseFloat(masDeOro)).toFixed(2);
  //const paraMasOro = ciudad?.acf?.para_mas_de_oro;
  const paraMasOro = 100;
  const valorSelectSuma = parseFloat(valorSelect) + parseFloat(masDeOro);
  const valorSelectNormal = parseFloat(valorSelect);
  const [selectKilates2, setSelectKilates2] = useState(null);
  const datosCiudad = ListadoCiudades.arrayMarker;

  const [opened, setOpened] = useState(true);
  const [ciudadOpen, setCiudadOpen] = useState(null);
  const [DataNombre, setDataNombre] = useState("");
  const [DataNombreKilate, setDataNombreKilate] = useState("");
  const [selectKilates, setSelectKilates] = useState(true);
  const [selectKilates3, setSelectKilates3] = useState(false);
  return (
    <div className={styles.contenedorAmbosBloquesOro}>
      <div className={styles.contenedorBloqueSuperior}>
        <div className={styles.bloqueIzq}>
          <div className={styles.select_ciudad}>
            <div
              onClick={(event) => {
                setCiudadSelect(false);
                setCiudadOpen(!ciudadOpen);
                setSelectKilates(false);
              }}
              className={styles.select_ciudadOptionUno}
            >
              {" "}
              {opened ? (
                <>
                  <p>Seleccione ciudad</p>
                  <KeyboardArrowDownIcon />
                </>
              ) : (
                <>
                  {DataNombre} <KeyboardArrowDownIcon />
                </>
              )}
            </div>

            <div
              className={
                ciudadOpen
                  ? `${styles.contenedorOptions} ${styles.contenedorOptionsActivo}`
                  : `${styles.contenedorOptions}`
              }
            >
              <ul>
                {datosCiudad.map((ciudad, i) => (
                  <li
                    key={i}
                    className={styles.listaCiudad}
                    onClick={(e) => {
                      //captureHabitual(e);
                      //setAcronimo(e.target.dataset.acronimo);
                      //setValorMoneda(e.target.dataset.precio);
                      setCiudadSelect(e.target.dataset.minusculas);
                      setDataNombre(e.target.dataset.nombre);
                      setCiudadOpen(false);
                      setSelectKilates(false);
                      setSelectKilates3(false);
                      setOpened(false);
                    }}
                    data-minusculas={ciudad.nombreMinusculas}
                    data-nombre={ciudad.nombre}
                  >
                    {ciudad.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <select
            className={styles.select_ciudad_mobil}
            onChange={(e) => {
              setCiudadSelect(e.target.value);
              setCiudadOpen(false);
              setSelectKilates(false);
              setSelectKilates3(false);
              setOpened(false);
            }}
          >
            {datosCiudad.map((ciudad, i) => (
              <option key={i} value={ciudad.nombreMinusculas}>
                {ciudad.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.botones}>
          <button
            onClick={() => {
              setMasDe(true);
            }}
            className={
              masDe
                ? `${styles.button} ${styles.botonActivo}`
                : `${styles.button} `
            }
          >
            Más de {paraMasOro}g
          </button>
          <button
            onClick={() => {
              setMasDe(false);
            }}
            className={
              masDe
                ? `${styles.button} `
                : `${styles.button} ${styles.botonActivo}`
            }
          >
            Menos de {paraMasOro}g
          </button>
        </div>
        {masDe ? (
          <div className={styles.contenedorPrecios}>
            <div className={styles.contenedorprecioDestacado}>
              <div className={styles.precioDestacado}>
                <p className={styles.masde}>Más de {paraMasOro}g</p>
                {!loading ? (
                  <p className={styles.precio18k}>Cargando</p>
                ) : (
                  <p className={styles.precio18k}>
                    {selectKilates ? "--- " : precioMas18k}
                    <span>€/g</span>
                  </p>
                )}
                <p className={styles.kilates}>18K</p>
              </div>
            </div>
            <div className={styles.contenedorOtrosPrecios}>
              <div className={styles.OtrosPrecios}>
                {!loading ? (
                  <p className={styles.precio}>Cargando</p>
                ) : (
                  <p className={styles.precio}>
                    {selectKilates ? "--- " : precioMas24k} <span>€/g</span>
                  </p>
                )}
                <p className={styles.preciok}>24K</p>
              </div>
              <div className={styles.OtrosPrecios}>
                {!loading ? (
                  <p className={styles.precio}>Cargando</p>
                ) : (
                  <p className={styles.precio}>
                    {selectKilates ? "--- " : precioMas14k} <span>€/g</span>
                  </p>
                )}
                <p className={styles.preciok}>14K</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.contenedorPrecios}>
            <div className={styles.contenedorprecioDestacado}>
              <div className={styles.precioDestacado}>
                <p className={styles.masde}>Menos de {paraMasOro}g</p>
                <p className={styles.precio18k}>
                  {selectKilates ? "--- " : precio18k.toFixed(2)}
                  <span>€/g</span>
                </p>
                <p className={styles.kilates}>18K</p>
              </div>
            </div>
            <div className={styles.contenedorOtrosPrecios}>
              <div className={styles.OtrosPrecios}>
                <p className={styles.precio}>
                  {selectKilates ? "--- " : precio24k.toFixed(2)}{" "}
                  <span>€/g</span>
                </p>
                <p className={styles.preciok}>24K</p>
              </div>
              <div className={styles.OtrosPrecios}>
                <p className={styles.precio}>
                  {selectKilates ? "--- " : precio14k.toFixed(2)}{" "}
                  <span>€/g</span>
                </p>
                <p className={styles.preciok}>14K</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.contenedorCalculadora}>
        <h2>
          ¿Cuánto <span>te vamos a dar</span> por tus joyas?
        </h2>
        <div className={styles.contenedorSelect}>
          <div className={styles.Select}>
            <p>Selecciona kilates</p>
            <div
              className={styles.SelectDiv}
              onClick={() => {
                setSelectKilates2(!selectKilates2);
              }}
            >
              <span
                className={styles.SelectDivKilate}
                data-precio={precio18k.toFixed(2)}
              >
                {selectKilates3 ? (
                  DataNombreKilate
                ) : (
                  <>
                    <span style={{ color: "#000" }}>---</span>{" "}
                    <KeyboardArrowDownIcon style={{ marginLeft: "65px" }} />
                  </>
                )}
              </span>
              <div
                className={
                  selectKilates2
                    ? `${styles.contenedorKilates} ${styles.contenedorKilatesActive}`
                    : `${styles.contenedorKilates}`
                }
              >
                <ul className={styles.contenedorUl}>
                  <li
                    onClick={(e) => {
                      setValorSelect(e.target.dataset.precio);
                      setDataNombreKilate(e.target.dataset.nombre);
                      setSelectKilates3(true);
                    }}
                    data-precio={precio18k.toFixed(2)}
                    data-nombre={"18k"}
                  >
                    18K
                  </li>
                  <li
                    onClick={(e) => {
                      setValorSelect(e.target.dataset.precio);
                      setDataNombreKilate(e.target.dataset.nombre);
                      setSelectKilates3(true);
                    }}
                    data-precio={precio14k.toFixed(2)}
                    data-nombre={"14k"}
                  >
                    14K
                  </li>
                  <li
                    onClick={(e) => {
                      setValorSelect(e.target.dataset.precio);
                      setDataNombreKilate(e.target.dataset.nombre);
                      setSelectKilates3(true);
                    }}
                    data-precio={precio24k.toFixed(2)}
                    data-nombre={"24k"}
                  >
                    24K
                  </li>
                </ul>
              </div>
            </div>
            {/*<select
              onChange={(e) => {
                setValorSelect(e.target.value);
              }}
            >
              <option selected={true} disabled="disabled">
                ---
              </option>
              <option value={precio18k.toFixed(2)}>18K</option>
              <option value={precio14k.toFixed(2)}>14K</option>
              <option value={precio24k.toFixed(2)}>24K</option>
            </select>*/}
          </div>
          <div className={styles.input}>
            <p>Introduce gramos</p>
            <input
              placeholder="Cantidad"
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={(event) => setValorInput(event.target.value)}
            />
            <span>g</span>
          </div>
        </div>
        <p className={styles.tituloInferior}>TE DAMOS POR TU ORO</p>
        <p className={styles.precioFinal}>
          {selectKilates3
            ? valorInput >= parseFloat(paraMasOro)
              ? (valorInput * valorSelectSuma).toLocaleString("es", {
                  style: "currency",
                  currency: "EUR",
                })
              : (valorInput * valorSelectNormal).toLocaleString("es", {
                  style: "currency",
                  currency: "EUR",
                })
            : "----"}
          <span></span>
        </p>
        <p className={styles.promocion}>
          <span className={styles.linea}>Promoción Online</span>
        </p>
        <a
          className={styles.botonLlamarTienda}
          href={`tel:${ciudad?.acf?.telefono}`}
        >
          LLAMA GRATIS AL {ciudad?.acf?.telefono}
        </a>
      </div>
    </div>
  );
};

export default CalculadoraOro;
