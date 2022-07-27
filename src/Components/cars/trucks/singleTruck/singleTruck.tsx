import Truck from "../../../../modal/truck";
import "./singleTruck.css";

interface SingleTruckProps {
    truckData: Truck;
}

function SingleTruck(props: SingleTruckProps): JSX.Element {
    return (
        <div className="singleTruck solidBox">
            <span>תוצרת: {props.truckData.tozeret_nm}</span> <br /> <br />
            <span>דגם: {props.truckData.degem_nm}</span> <br /> <br />
            <span>שנת ייצור: {props.truckData.shnat_yitzur}</span> <br /> <br />
        </div>
    );
}

export default SingleTruck;
