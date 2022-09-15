import { TextField, Button } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import OffRoadCar from "../../../modal/offroad";
import "./offRoad.css";
import notify, { ErrorMessage, SuccessMessage } from './../../../utils/notify';
import SingleOffRoad from "./singleOffRoad/singleOffRoad";
import URLs from './../../../utils/links';
import regex from "../../../utils/regex";

function OffRoad(): JSX.Element {
    const [lp, setLP] = useState("");
    const [offRoadData, setData] = useState<OffRoadCar>(new OffRoadCar());

    const updateLP = (args: SyntheticEvent) => {
        let value = (args.target as HTMLInputElement).value;
        setLP(value);
    };

    const findLP = () => {
        if (regex.test(lp) === false) {
            notify.error(ErrorMessage.INVALID_PLATE);
            return;
        }

        axios.get(URLs.OFF_ROAD + lp)
            .then((response) => {
                const responseData = response.data.result.records;
                if (response.status === 200 && responseData.length > 0) {
                    setData(responseData[0]);
                    notify.success(SuccessMessage.CAR_FOUND);
                } else {
                    setData(new OffRoadCar());
                    notify.error(ErrorMessage.CAR_NOT_FOUND);
                }
            })
            .catch((err) => {
                setData(new OffRoadCar());
                notify.error(ErrorMessage.MALFUNCTION);
            })
    };

    return (
        <div className="offRoad">
            <h1>רכבים שהורדו מהכביש</h1> <hr />
            <form>
                <TextField label="לוחית רישוי" onChange={updateLP}
                    helperText="לוחית רישוי צריכה להיות בעלת 7 או 8 ספרות"
                    error={regex.test(lp) === false && lp.length > 0}></TextField><br /><br />
                <Button variant="contained" onClick={findLP}>לחיפוש</Button>
            </form>
            <br /><br />
            <SingleOffRoad offRoadData={offRoadData} />
        </div>
    );
}

export default OffRoad;
