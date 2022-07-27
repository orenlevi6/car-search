import { TextField, Button } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import OffRoadCar from "../../../modal/offroad";
import { Links } from "../../../utils/links";
import "./offRoad.css";
import notify, { ErrorMessage, SuccessMessage } from './../../../utils/notify';
import SingleOffRoad from "./singleOffRoad/singleOffRoad";

function OffRoad(): JSX.Element {
    let [lp, setLP] = useState("");
    let [offRoadData, setData] = useState<OffRoadCar>(new OffRoadCar());

    const updateLP = (args: SyntheticEvent) => {
        let value = (args.target as HTMLInputElement).value;
        setLP(value);
    };

    const findLP = () => {
        axios.get(Links.OFF_ROAD + lp).
            then((response) => {
                const responseData = response.data.result.records;
                if (response.status == 200 && responseData.length > 0) {
                    setData(responseData[0]);
                    notify.success(SuccessMessage.CAR_FOUND);
                } else {
                    setData(new OffRoadCar());
                    notify.error(ErrorMessage.CAR_NOT_FOUND);
                }
            })
            .catch((err) => {
                setData(new OffRoadCar());
                notify.error(ErrorMessage.ERROR_MESSAGE);
            })
    };

    return (
        <div className="offRoad">
            <h1>רכבים שהורדו מהכביש</h1> <hr />
            <form>
                <TextField label="לוחית רישוי" onChange={updateLP}></TextField><br /><br />
                <Button variant="contained" onClick={findLP}>לחיפוש</Button>
            </form>
            <br /><br />
            <SingleOffRoad offRoadData={offRoadData} />
        </div>
    );
}

export default OffRoad;
