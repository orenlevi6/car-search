import { BrowserRouter } from "react-router-dom";
import "./mainLayout.css";
import MyFooter from "./myFooter/myFooter";
import MyHeader from "./myHeader/myHeader";
import MyMenu from "./myMenu/myMenu";
import Routing from './../routing/routing';
import { createTheme, Paper, ThemeProvider } from "@mui/material";
import { useState } from 'react';

function MainLayout(): JSX.Element {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    const setBright = () => {
        setDarkMode(false);
    };

    const setDark = () => {
        setDarkMode(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: '100%', margin: "0", padding: "0", overflow: "auto" }}>
                <div className="mainLayout" dir="rtl">
                    <BrowserRouter>
                        <header>
                            <MyHeader setBright={setBright} setDark={setDark} />
                        </header>
                        <aside>
                            <MyMenu />
                        </aside>
                        <main>
                            <Routing />
                        </main>
                        <footer>
                            <MyFooter />
                        </footer>
                    </BrowserRouter>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

export default MainLayout;
