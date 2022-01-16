import { Fragment } from "react";
import { Typography } from "@material-ui/core";

function Acasa() {
    return (
        <>
            <h2>Partajati experiente din timpul utilizarii mijloacelor de transport</h2>
            <Typography variant="h6"></Typography>
            <div>
                <p>
                    Această aplicație a fost creată de Oană Andreea Ramona, Oniga Andreea Denisa și Paraschivescu Ștefan, studenți ai Academiei de Studii Economice, în cadrul seminarului de tehnologii web.
                </p>
                <p>
                    Aplicația oferă posibilitatea utilizatorilor să își împărtășească experiența din timpul călătoriei cu unul dintre mijloacele de transport în comun.
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
            {/* <div>
                <img src={require('src\imagini\logo2.png')} />
            </div> */}
        </>
    );
}

export default Acasa;
