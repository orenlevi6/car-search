import { BrowserRouter } from "react-router-dom";
import HomePage from "./homePage/homePage";
import "./mainLayout.css";
import MyFooter from "./myFooter/myFooter";
import MyHeader from "./myHeader/myHeader";
import MyMenu from "./myMenu/myMenu";
import Routing from './../routing/routing';

function MainLayout(): JSX.Element {
    return (
        <div className="mainLayout" dir="rtl">
            <BrowserRouter>
                <header>
                    <MyHeader />
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
    );
}

export default MainLayout;
