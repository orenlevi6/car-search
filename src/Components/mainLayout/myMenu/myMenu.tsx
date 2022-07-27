import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./myMenu.css";

function MyMenu(): JSX.Element {
    let [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div className="myMenu">
            <h1>{time}</h1> <br />
            <h2>קישורים</h2>
            <NavLink to={"/"}>דף הבית</NavLink><br /><br />
            <NavLink to={"/bikes"}>חיפוש אופנועים</NavLink><br /><br />
            <NavLink to={"/privateCars"}>חיפוש רכבים פרטיים</NavLink><br /><br />
            <NavLink to={"/trucks"}>חיפוש משאיות</NavLink><br /><br />
            <NavLink to={"/handicapped"}>חיפוש רכבי נכים</NavLink><br /><br />
            <NavLink to={"/recall"}>חיפוש רכבים שקיבלו ריקול</NavLink><br /><br />
            <NavLink to={"/offRoad"}>חיפוש רכבים שהורדו מהכביש</NavLink><br /><br />
        </div>
    );
}

export default MyMenu;
