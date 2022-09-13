import { Route, Routes } from "react-router-dom";
import "./routing.css";
import HomePage from './../mainLayout/homePage/homePage';
import Page404 from "./page404/page404";
import Bikes from "../vehicles/bikes/bikes";
import OffRoad from "../vehicles/offRoad/offRoad";
import PrivateCars from "../vehicles/privateCars/privateCars";
import Trucks from "../vehicles/trucks/trucks";
import Handicap from "../vehicles/handicap/handicap";
import Recall from "../vehicles/recall/recall";

function Routing(): JSX.Element {
    return (
        <div className="routing">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="bikes" element={<Bikes />} />
                <Route path="private-cars" element={<PrivateCars />} />
                <Route path="trucks" element={<Trucks />} />
                <Route path="handicapped" element={<Handicap />} />
                <Route path="recall" element={<Recall />} />
                <Route path="offRoad" element={<OffRoad />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
