import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import RecallCar from "../../../modal/recall";
import URLs from "../../../utils/links";
import notify, { SuccessMessage, ErrorMessage } from "../../../utils/notify";
import regex from "../../../utils/regex";
import "./recall.css";
import SingleRecall from "./singleRecall/singleRecall";

function Recall(): JSX.Element {
    const [lp, setLP] = useState("");
    const [recallData, setData] = useState<RecallCar>(new RecallCar());

    const updateLP = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        setLP(value);
    };

    const findLP = () => {
        if (regex.test(lp) === false) {
            notify.error(ErrorMessage.INVALID_PLATE);
            return;
        }

        axios.get(URLs.RECALL + lp)
            .then((response) => {
                const responseData = response.data.result.records;
                if (response.status === 200 && responseData.length > 0) {
                    setData(responseData[0]);
                    notify.success(SuccessMessage.CAR_FOUND);
                } else {
                    setData(new RecallCar());
                    notify.error(ErrorMessage.CAR_NOT_FOUND);
                }
            })
            .catch((err) => {
                setData(new RecallCar());
                notify.error(ErrorMessage.MALFUNCTION);
            })
    };

    return (
        <div className="recall">
            <h1>רכבים שקיבלו ריקול</h1> <hr />
            <form>
                <TextField label="לוחית רישוי" onChange={updateLP}
                    helperText="לוחית רישוי צריכה להיות בעלת 7 או 8 ספרות"
                    error={regex.test(lp) === false && lp.length > 0}></TextField>
                <br /> <br />
                <Button variant="contained" onClick={findLP}>לחיפוש</Button>
            </form>
            <br /> <br />
            <SingleRecall recallData={recallData} />
        </div>
    );
}

export default Recall;
