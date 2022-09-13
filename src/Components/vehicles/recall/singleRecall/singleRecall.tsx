import RecallCar from "../../../../modal/recall";
import "./singleRecall.css";

interface SingleRecallProps {
    recallData: RecallCar;
}

function SingleRecall(props: SingleRecallProps): JSX.Element {
    return (
        <div className="singleRecall solidBox">
            <span>סוג ריקול: {props.recallData.SUG_RECALL}</span> <br /> <br />
            <span>סוג תקלה: {props.recallData.SUG_TAKALA}</span> <br /> <br />
            <span>תאור תקלה: {props.recallData.TEUR_TAKALA}</span> <br /> <br />
        </div>
    );
}

export default SingleRecall;
