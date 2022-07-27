import PrivateCar from "../../../../modal/privateCar";
import "./singleCar.css";

interface SingleCarProps {
	carData: PrivateCar;
}

function SingleCar(props: SingleCarProps): JSX.Element {
	return (
		<div className="singleCar solidBox">
			<span>תוצרת: {props.carData.tozeret_nm}</span> <br /> <br />
			<span>דגם: {props.carData.kinuy_mishari}</span> <br /> <br />
			<span>שנת ייצור: {props.carData.shnat_yitzur}</span> <br /> <br />
			<span>תוקף טסט: {props.carData.tokef_dt && props.carData.tokef_dt.split("T")[0]}</span> <br /> <br />
		</div>
	);
}

export default SingleCar;
