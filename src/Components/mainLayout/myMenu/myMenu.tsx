import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./myMenu.css";

function MyMenu(): JSX.Element {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString("he-il"));
        setInterval(() => {
            setTime(new Date().toLocaleTimeString("he-il"));
        }, 1000);
    }, []);

    return (
        <div className="myMenu">
            <h1>{date}</h1>
            <h1>{time}</h1> <br />
            <h2><u>קישורים</u></h2>
            <NavLink color="inherit" to={"/"}>דף הבית</NavLink><br /><br />
            <NavLink color="inherit" to={"/bikes"}>חיפוש אופנועים</NavLink><br /><br />
            <NavLink color="inherit" to={"/private-cars"}>חיפוש רכבים פרטיים</NavLink><br /><br />
            <NavLink color="inherit" to={"/trucks"}>חיפוש משאיות</NavLink><br /><br />
            <NavLink color="inherit" to={"/handicapped"}>חיפוש רכבי נכים</NavLink><br /><br />
            <NavLink color="inherit" to={"/recall"}>חיפוש רכבים שקיבלו ריקול</NavLink><br /><br />
            <NavLink color="inherit" to={"/offRoad"}>חיפוש רכבים שהורדו מהכביש</NavLink><br /><br />
        </div>
    );
}

export default MyMenu;
