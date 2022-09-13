import "./singleBike.css";
import Bike from './../../../../modal/bike';

interface SingleBikeProps {
    bikeData: Bike;
}

function SingleBike(props: SingleBikeProps): JSX.Element {
    return (
        <div className="singleBike solidBox">
            <span>תוצרת: {props.bikeData.tozeret_nm}</span> <br /> <br />
            <span>דגם: {props.bikeData.degem_nm}</span> <br /> <br />
            <span>שנת ייצור: {props.bikeData.shnat_yitzur}</span> <br />
        </div>
    );
}

export default SingleBike;
