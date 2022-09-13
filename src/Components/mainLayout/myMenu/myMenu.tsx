import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./myMenu.css";

function MyMenu(): JSX.Element {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toDateString());
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div className="myMenu">
            <h1>{date}</h1>
            <h1>{time}</h1> <br />
            <h2><u>קישורים</u></h2>
            <NavLink to={"/"}>דף הבית</NavLink><br /><br />
            <NavLink to={"/bikes"}>חיפוש אופנועים</NavLink><br /><br />
            <NavLink to={"/private-cars"}>חיפוש רכבים פרטיים</NavLink><br /><br />
            <NavLink to={"/trucks"}>חיפוש משאיות</NavLink><br /><br />
            <NavLink to={"/handicapped"}>חיפוש רכבי נכים</NavLink><br /><br />
            <NavLink to={"/recall"}>חיפוש רכבים שקיבלו ריקול</NavLink><br /><br />
            <NavLink to={"/offRoad"}>חיפוש רכבים שהורדו מהכביש</NavLink><br /><br />
        </div>
    );
}

export default MyMenu;
