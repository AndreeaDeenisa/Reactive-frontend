import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useNavigate } from "react-router-dom";

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

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "flex",
    alignItems: "center",
  },
  iconFilled: {},
  iconFilled1: { color: "green" },
  iconFilled2: { color: "blue" },
  iconFilled3: { color: "yellow" },
  iconFilled4: { color: "orange" },
  iconFilled5: { color: "red" },
  iconHover: {},
  iconHover1: { color: "green" },
  iconHover2: { color: "blue" },
  iconHover3: { color: "yellow" },
  iconHover4: { color: "orange" },
  iconHover5: { color: "red" },
});

function ExperientaNoua() {
  async function creeazaExperienta(date) {
    if (
      date.punctPlecare &&
      date.punctSosire &&
      date.dataPlecare &&
      date.durataCalatorie &&
      date.aglomeratie &&
      date.satisfactie
    ) {
      fetch("http://localhost:3000/experiente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          punctPlecare: date.punctPlecare,
          punctSosire: date.punctSosire,
          tipTransport: date.tipTransport,
          oraPlecarii: date.dataPlecare,
          durataCalatoriei: date.durataCalatorie,
          gradAglomerare: date.aglomeratie,
          observatii: date.observatii,
          nivelSatisfactie: date.satisfactie,
        }),
      })
        .then(async (res) => {
          if (res.status == 200) {
            alert("Experienta a fost adaugata cu succes!");
            navigate("/");
          }
        })
        .catch((error) => {
          alert("Eroare. " + error.toString());
        });
    } else alert("Datele din campuri nu sunt corecte!");
  }

  const classes = useStyles();
  const navigate = useNavigate();

  const [punctPlecare, setPunctPlecare] = React.useState();
  const [punctSosire, setPunctSosire] = React.useState();
  const [tipTransport, setTipTransport] = React.useState("bus");
  const [dataPlecare, setDataPlecare] = React.useState();
  const [durataCalatorie, setDurataCalatorie] = React.useState();
  const [observatii, setObservatii] = React.useState();
  const [aglomeratie, setAglomeratie] = React.useState(3);
  const [hoverAglomeratie, setHoverAglomeratie] = React.useState(-1);
  const [iconFilledVar, setIconFilled] = React.useState(classes.iconFilled);
  const [iconHoverVar, setIconHover] = React.useState(classes.iconHover);
  const [satisfactie, setSatisfcatie] = React.useState(3);
  const [hoverSatisfactie, setHoverSatisfcatie] = React.useState(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await creeazaExperienta({
      punctPlecare,
      punctSosire,
      tipTransport,
      dataPlecare,
      durataCalatorie,
      observatii,
      aglomeratie,
      satisfactie,
    });
  };

  function handleDateChange(ev) {
    if (!ev.target["validity"].valid) return;
    const dt = ev.target["value"] + ":00Z";
    setDataPlecare(dt);
  }

  return (
    <div className="experienta-wrapper">
      <h1>Adauga experienta</h1>
      <form id="adaugaExperienta" onSubmit={handleSubmit}>
        <label>
          <p>Punct plecare</p>
          <input
            type="text"
            required
            onChange={(e) => setPunctPlecare(e.target.value)}
          />
        </label>
        <label>
          <p>Punct sosire</p>
          <input
            type="text"
            required
            onChange={(e) => setPunctSosire(e.target.value)}
          />
        </label>
        <label>
          <p>Tip transport</p>
          <select
            className="input"
            name="transport"
            onChange={(e) => setTipTransport(e.target.value.toLowerCase())}
          >
            <option value="Autobuz">Autobuz</option>
            <option value="Tramvai">Tramvai</option>
            <option value="Troleibuz">Troleibuz</option>
            <option value="Metrou">Metrou</option>
            <option value="Tren">Tren</option>
            <option value="Avion">Avion</option>
          </select>
        </label>
        <label>
          <p>Ora plecare (data si ora)</p>
          <input
            type="datetime-local"
            required
            className="input"
            name="oraPlecare"
            onChange={handleDateChange}
            value={(dataPlecare || "").toString().substring(0, 16)}
          />
        </label>
        <label>
          <p>Durata calatorie</p>
          <input
            className="input"
            required
            type="number"
            onChange={(e) => setDurataCalatorie(e.target.value)}
          />
        </label>
        <label>
          <p>Grad aglomeratie</p>
          <Rating
            name="hover-feedback"
            value={aglomeratie}
            precision={1}
            onChange={(event, newValue) => {
              setAglomeratie(newValue);
              switch (true) {
                case newValue <= 1: {
                  setIconFilled(classes.iconFilled1);
                  break;
                }
                case newValue <= 2 && newValue > 1: {
                  setIconFilled(classes.iconFilled2);
                  break;
                }
                case newValue <= 3 && newValue > 2: {
                  setIconFilled(classes.iconFilled3);
                  break;
                }
                case newValue <= 4 && newValue > 3: {
                  setIconFilled(classes.iconFilled4);
                  break;
                }
                case newValue > 4: {
                  setIconFilled(classes.iconFilled5);
                  break;
                }
              }
            }}
            onChangeActive={(event, newHover) => {
              setHoverAglomeratie(newHover);
              switch (true) {
                case newHover <= 1: {
                  setIconHover(classes.iconHover1);
                  break;
                }
                case newHover <= 2 && newHover > 1: {
                  setIconHover(classes.iconHover2);
                  break;
                }
                case newHover <= 3 && newHover > 2: {
                  setIconHover(classes.iconHover3);
                  break;
                }
                case newHover <= 4 && newHover > 3: {
                  setIconHover(classes.iconHover4);
                  break;
                }
                case newHover > 4: {
                  setIconHover(classes.iconHover5);
                  break;
                }
              }
            }}
            defaultValue={2}
            icon={<FiberManualRecordIcon fontSize="inherit" />}
            emptyIcon={<FiberManualRecordIcon fontSize="inherit" />}
            classes={{
              iconFilled: iconFilledVar,
              iconHover: iconHoverVar,
            }}
          />
          {aglomeratie !== null && (
            <Box sx={{ ml: 2 }}>
              {
                gradeAglomerare[
                  hoverAglomeratie !== -1 ? hoverAglomeratie : aglomeratie
                ]
              }
            </Box>
          )}
        </label>
        <label>
          <p>Observatii</p>
          <textarea
            className="input"
            name="observatii"
            rows="4"
            onChange={(e) => setObservatii(e.target.value)}
          />
        </label>
        <label>
          <p>Nivel satisfactie</p>
          <Rating
            name="hover-feedback"
            value={satisfactie}
            precision={1}
            onChange={(event, newValue) => {
              setSatisfcatie(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHoverSatisfcatie(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {satisfactie !== null && (
            <Box sx={{ ml: 2 }}>
              {
                gradeSatisfactie[
                  hoverSatisfactie !== -1 ? hoverSatisfactie : satisfactie
                ]
              }
            </Box>
          )}
        </label>
        <div>
          <input
            id="butonExperienta"
            value={"Adauga experienta"}
            type="submit"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ExperientaNoua;
