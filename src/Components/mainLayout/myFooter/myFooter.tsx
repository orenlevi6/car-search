import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./myFooter.css";

function MyFooter(): JSX.Element {
    return (
        <div className="myFooter">
            <span>כל הזכויות שמורות - אורן לוי {new Date().getFullYear()} &reg;</span>
            <br />
            <IconButton href="https://www.github.com/orenlevi6" target={"_blank"}>
                <GitHub />
            </IconButton> &nbsp;

            <IconButton href="https://www.linkedin.com/in/orenlevi6" target={"_blank"}>
                <LinkedIn />
            </IconButton> &nbsp;
        </div>
    );
}

export default MyFooter;
