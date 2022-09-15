import "./bikes.css";
import { SyntheticEvent, useState } from 'react';
import Bike from './../../../modal/bike';
import axios from "axios";
import { TextField, Button } from "@mui/material";
import SingleBike from "./singleBike/singleBike";
import notify, { ErrorMessage, SuccessMessage } from './../../../utils/notify';
import URLs from "../../../utils/links";
import regex from './../../../utils/regex';

function Bikes(): JSX.Element {
  const [lp, setLP] = useState("");
  const [bikeData, setData] = useState<Bike>(new Bike());


  const updateLP = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    setLP(value);
  };

  const findLP = () => {
    if (regex.test(lp) === false) {
      notify.error(ErrorMessage.INVALID_PLATE);
      return;
    }

    axios.get(URLs.BIKES + lp)
      .then((response) => {
        const responseData = response.data.result.records;
        if (response.status === 200 && responseData.length > 0) {
          setData(responseData[0]);
          notify.success(SuccessMessage.CAR_FOUND);
        } else {
          setData(new Bike());
          notify.error(ErrorMessage.CAR_NOT_FOUND);
        }
      })
      .catch((err) => {
        setData(new Bike());
        notify.error(ErrorMessage.MALFUNCTION);
      })
  };

  return (
    <div className="bikes">
      <h1>רכבים דו גלגליים (אופנועים)</h1> <hr />
      <form>
        <TextField label="לוחית רישוי" onChange={updateLP}
          helperText="לוחית רישוי צריכה להיות בעלת 7 או 8 ספרות"
          error={regex.test(lp) === false && lp.length > 0}></TextField>
        <br /> <br />
        <Button variant="contained" onClick={findLP}>לחיפוש</Button>
      </form>
      <br /> <br />
      <SingleBike bikeData={bikeData} />
    </div>
  );
}

export default Bikes;
