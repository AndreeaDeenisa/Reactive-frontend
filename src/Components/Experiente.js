import { Label } from "@material-ui/icons";
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
  const [searchInput, setSearchInput] = useState();
  const [expFiltrate, setExpFiltrate] = useState(experiente);
  const [filtru, setFiltru] = useState("none");

  useEffect(() => {
    setExpFiltrate(experiente);
  }, [experiente]);

  const handleChange = value => {
    setSearchInput(value);
    filterData(value);
  };

  const handleChangeFiltru = value => {
    setFiltru(value);
    setSearchInput('');
    console.log(value);
  };


  const filterData = value => {
    const val = value.toLowerCase().trim();
    if (!val) {
      setExpFiltrate(experiente);
    }
    else {
      if (filtru == "none") {
        const dateFiltrateNone = experiente.filter(item => {
          return Object.keys(item).some(key => {
            return item[key].toString().toLowerCase().includes(val);
          })
        });
        console.log(dateFiltrateNone);
        setExpFiltrate(dateFiltrateNone);
      }
      else
        if (filtru == "punctPlecare") {
          const dateFiltratePlecare = experiente.filter(item => {
            return Object.keys(item).some(key => {
              return key == "punctPlecare" && item[key].toString().toLowerCase().includes(val);
            })
          });
          console.log(dateFiltratePlecare);
          setExpFiltrate(dateFiltratePlecare);
        }
        else if (filtru == "punctSosire") {
          const dateFiltrateSosire = experiente.filter(item => {
            return Object.keys(item).some(key => {
              return key == "punctSosire" && item[key].toString().toLowerCase().includes(val);
            })
          });
          console.log(dateFiltrateSosire);
          setExpFiltrate(dateFiltrateSosire);
        } else if (filtru == "tipTransport") {
          const dateFiltrateTipTransport = experiente.filter(item => {
            return Object.keys(item).some(key => {
              return key == "tipTransport" && item[key].toString().toLowerCase().includes(val);
            })
          });
          console.log(dateFiltrateTipTransport);
          setExpFiltrate(dateFiltrateTipTransport);
        }

    }
  }

  return (
    <div class="container">
      <div>
        <input id="inputSearch"
          type="text"
          placeholder="Search here"
          onChange={e => handleChange(e.target.value)}
          value={searchInput} />
      </div>
      <div>
        <select name="filtre" id="selectiefiltru" onChange={e => handleChangeFiltru(e.target.value)}>
          <option value="none">None</option>
          <option value="punctPlecare">Punct Plecare</option>
          <option value="punctSosire">Punct Sosire</option>
          <option value="tipTransport">Tip transport</option>
        </select>
      </div>
      <br></br><br></br><br></br><br></br>



      <h3 className="p-3 text-center">Experiente utilizatori</h3>
      <table className="table-format">
        <thead>
          {expFiltrate.length != 0 && (
            <tr>
              <th>Mijloc de transport</th>
              <th>Punct Plecare</th>
              <th>Punct Sosire</th>
              <th>Ora plecare</th>
              <th>Durata calatoriei(min)</th>
              <th>Gradul de aglomerare al mijlocului de transport</th>
              <th>Observații</th>
              <th>Nivelul de satisfacție</th>
            </tr>
          )}
        </thead>
        <tbody>
          {expFiltrate.map((experienta) => (
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
          {expFiltrate.length === 0 && (
            <span>Nu a fost gasita nicio experienta</span>
          )}
        </tbody>
      </table>
    </div >
  );
}

export default Experiente;