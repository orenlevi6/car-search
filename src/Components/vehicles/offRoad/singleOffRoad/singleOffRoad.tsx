import OffRoadCar from "../../../../modal/offroad";
import "./singleOffRoad.css";

interface SingleOffRoadProps {
	offRoadData: OffRoadCar;
}

function SingleOffRoad(props: SingleOffRoadProps): JSX.Element {
	return (
		<div className="singleOffRoad solidBox">
			<span>סוג הרכב: {props.offRoadData.sug_rechev_nm}</span><br /><br />
			<span>תוצרת: {props.offRoadData.tozeret_nm}</span><br /><br />
			<span>דגם: {props.offRoadData.degem_nm}</span><br /><br />
			<span>תאריך ביטול: {props.offRoadData.bitul_dt && props.offRoadData.bitul_dt.split("T")[0]}</span><br /><br />
		</div>
	);
}

export default SingleOffRoad;
