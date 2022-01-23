import { Typography } from "@material-ui/core";

function Acasa() {
  return (
    <>
      <h2>
        Partajați experiențe din timpul utilizării mijloacelor de transport
      </h2>{" "}
      <br></br>
      <br></br>
      <img id="acasa" src="logo2.png" alt="Mijloace Transport" />
      <br></br>
      <Typography variant="h6"></Typography>
      <div>
        <p id="parag">
          Aplicația oferă posibilitatea utilizatorilor să își împărtășească
          experiența din timpul călătoriei cu unul dintre mijloacele de
          transport în comun. În timpul utilizării aplicației nu vor fi
          furnizate informații cu privire la identitatea utilizatorilor care au
          partajat experiențe. Scopul este de a identifica nemulțumirile apărute
          pe parcursul călătoriei pentru a le remedia.
        </p>
        <p>
          Detaliile furnizate vor fi cu privire la:
          <ul>
            <li>Punctul de plecare </li>
            <li>Punctul de sosire </li>
            <li>Mijlocul de transport folosit </li>
            <li>Ora plecare </li>
            <li>Durata călătoriei </li>
            <li>Gradul de aglomerare al mijlocului de transport </li>
            <li>Observații </li>
            <li>Nivelul de satisfacție </li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default Acasa;
