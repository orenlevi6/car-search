import HandicapCar from "../../../../modal/handicap";
import "./singleHandicap.css";

interface SingleHandicapProps {
    handicapData: HandicapCar;
}

function SingleHandicap(props: SingleHandicapProps): JSX.Element {
    return (
        <div className="singleHandicap solidBox">
            <span>סוג תו: {props.handicapData["SUG TAV"]}</span> <br /> <br />
            <span>תאריך הפקת תג: {props.handicapData["TAARICH HAFAKAT TAG"]}</span> <br /> <br />
        </div>
    );
}

export default SingleHandicap;
