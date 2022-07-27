import { Route, Routes } from "react-router-dom";
import "./routing.css";
import HomePage from './../mainLayout/homePage/homePage';
import Page404 from "./page404/page404";
import Bikes from "../cars/bikes/bikes";
import Handicap from "../cars/handicap/handicap";
import OffRoad from "../cars/offRoad/offRoad";
import PrivateCars from "../cars/privateCars/privateCars";
import Recall from "../cars/recall/recall";
import Trucks from "../cars/trucks/trucks";

function Routing(): JSX.Element {
    return (
        <div className="routing">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="bikes" element={<Bikes />} />
                <Route path="privateCars" element={<PrivateCars />} />
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
