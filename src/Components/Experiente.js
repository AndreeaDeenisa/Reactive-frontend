import React, { useEffect, useState } from "react";

const gradeSatisfactie = {
  1: "Foarte slab",
  2: "Slab",
  3: "Decent",
  4: "Bun",
  5: "Excelent",
};

const gradeAglomerare = {
  1: "Neaglomerat",
  2: "Putin aglomerat",
  3: "Aglomerat",
  4: "Foarte aglomerat",
  5: "Inacceptabil",
};

function Experiente() {
  useEffect(() => {
    fetch("http://localhost:3000/experiente")
      .then((response) => response.json())
      .then((data) => setExperiente(data));
  }, []);

  const [experiente, setExperiente] = useState([]);

  return (
    <div className="container">
      <h3 className="p-3 text-center">Experiente utilizatori</h3>
      <table className="table-format">
        <thead>
          {experiente.length != 0 && (
            <tr>
              <th>Mijloc de transport</th>
              <th>Punct Plecare</th>
              <th>Punct Sosire</th>
              <th>Ora plecare</th>
              <th>Durata calatoriei</th>
              <th>Gradul de aglomerare al mijlocului de transport</th>
              <th>Observații</th>
              <th>Nivelul de satisfacție</th>
            </tr>
          )}
        </thead>
        <tbody>
          {experiente.map((experienta) => (
            <tr key={experienta.id}>
              <td>{experienta.tipTransport}</td>
              <td>{experienta.punctPlecare}</td>
              <td>{experienta.punctSosire}</td>
              <td>{experienta.oraPlecarii.split("T")[1].split(".")[0]}</td>
              <td>{experienta.durataCalatoriei}</td>
              <td>{gradeAglomerare[experienta.gradAglomerare]}</td>
              <td>{experienta.observatii}</td>
              <td>{gradeSatisfactie[experienta.nivelSatisfactie]}</td>
            </tr>
          ))}
          {experiente.length === 0 && (
            <span>Nu a fost gasita nicio experienta</span>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Experiente;
