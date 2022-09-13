import { TextField, Button } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import PrivateCar from "../../../modal/privateCar";
import notify, { SuccessMessage, ErrorMessage } from "../../../utils/notify";
import "./privateCars.css";
import SingleCar from './singleCar/singleCar';
import URLs from './../../../utils/links';

function PrivateCars(): JSX.Element {
    let [lp, setLP] = useState("");
    let [carData, setData] = useState<PrivateCar>(new PrivateCar());

    const updateLP = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        setLP(value);
    };

    const findLP = () => {
        axios.get(URLs.PRIVATE_CARS + lp).
            then((response) => {
                const responseData = response.data.result.records;
                if (response.status == 200 && responseData.length > 0) {
                    setData(responseData[0]);
                    notify.success(SuccessMessage.CAR_FOUND);
                } else {
                    setData(new PrivateCar());
                    notify.error(ErrorMessage.CAR_NOT_FOUND);
                }
            })
            .catch((err) => {
                setData(new PrivateCar());
                notify.error(ErrorMessage.MALFUNCTION);
            })
    };

    return (
        <div className="privateCars">
            <h1>רכבים פרטיים</h1> <hr />
            <form>
                <TextField label="לוחית רישוי" onChange={updateLP}></TextField>
                <br /> <br />
                <Button variant="contained" onClick={findLP}>לחיפוש</Button>
            </form>
            <br /> <br />
            <SingleCar carData={carData} />
        </div>
    );
}

export default PrivateCars;
