import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import Truck from "../../../modal/truck";
import { Links } from "../../../utils/links";
import notify, { SuccessMessage, ErrorMessage } from "../../../utils/notify";
import SingleTruck from "./singleTruck/singleTruck";
import "./trucks.css";

function Trucks(): JSX.Element {
    let [lp, setLP] = useState("");
    let [truckData, setData] = useState<Truck>(new Truck());

    const updateLP = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        setLP(value);
    };

    const findLP = () => {
        axios.get(Links.TRUCKS + lp).
            then((response) => {
                const responseData = response.data.result.records;
                if (response.status == 200 && responseData.length > 0) {
                    setData(responseData[0]);
                    notify.success(SuccessMessage.CAR_FOUND);
                } else {
                    setData(new Truck());
                    notify.error(ErrorMessage.CAR_NOT_FOUND);
                }
            })
            .catch((err) => {
                setData(new Truck());
                notify.error(ErrorMessage.ERROR_MESSAGE);
            })
    };

    return (
        <div className="trucks">
            <h1>משאיות</h1> <hr />
            <form>
                <TextField label="לוחית רישוי" onChange={updateLP}></TextField>
                <br /> <br />
                <Button variant="contained" onClick={findLP}>לחיפוש</Button>
            </form>
            <br /> <br />
            <SingleTruck truckData={truckData} />
        </div>
    );
}

export default Trucks;
