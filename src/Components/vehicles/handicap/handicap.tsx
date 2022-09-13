import "./handicap.css";
import { SyntheticEvent, useState } from 'react';
import HandicapCar from "../../../modal/handicap";
import axios from "axios";
import URLs from "../../../utils/links";
import notify, { SuccessMessage, ErrorMessage } from "../../../utils/notify";
import { TextField, Button } from "@mui/material";
import SingleHandicap from "./singleHandicap/singleHandicap";

function Handicap(): JSX.Element {
    let [lp, setLP] = useState("");
    let [handicapData, setData] = useState<HandicapCar>(new HandicapCar());

    const updateLP = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        setLP(value);
    };

    const findLP = () => {
        axios.get(URLs.HANDICAP + lp)
            .then((response) => {
                const responseData = response.data.result.records;
                if (response.status == 200 && responseData.length > 0) {
                    setData(responseData[0]);
                    notify.success(SuccessMessage.CAR_FOUND);
                } else {
                    setData(new HandicapCar());
                    notify.error(ErrorMessage.CAR_NOT_FOUND);
                }
            })
            .catch((err) => {
                setData(new HandicapCar());
                notify.error(ErrorMessage.MALFUNCTION);
            })
    };

    return (
        <div className="handicap">
            <h1>רכבי נכים</h1> <hr />
            <form>
                <TextField label="לוחית רישוי" onChange={updateLP}></TextField>
                <br /> <br />
                <Button variant="contained" onClick={findLP}>לחיפוש</Button>
            </form>
            <br /> <br />
            <SingleHandicap handicapData={handicapData} />
        </div>
    );
}

export default Handicap;
