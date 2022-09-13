import { Brightness5Outlined, DarkModeOutlined } from "@mui/icons-material";
import { ButtonGroup, IconButton } from "@mui/material";
import "./myHeader.css";

function MyHeader({ setBright, setDark }: any): JSX.Element {
    return (
        <div className="myHeader">
            <ButtonGroup variant="outlined" sx={{ margin: "5px -300px 5px 5px" }}>
                <IconButton onClick={setBright} sx={{ border: "1px solid black", borderRadius: "10px" }}>
                    <Brightness5Outlined />
                </IconButton> &nbsp;
                <IconButton onClick={setDark} sx={{ border: "1px solid black", borderRadius: "10px" }}>
                    <DarkModeOutlined />
                </IconButton>
            </ButtonGroup>
            <h1 style={{ margin: "5px -200px 5px 5px" }}>איתור רכבים - משרד התחבורה</h1>
        </div>
    );
}

export default MyHeader;
