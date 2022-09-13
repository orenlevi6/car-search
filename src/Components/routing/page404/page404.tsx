import "./page404.css";
import error from "../../../assets/error.jpg";

function Page404(): JSX.Element {
    return (
        <div className="page404">
            <h1>הדף לא נמצא - 404</h1> <br /> <br /> <br />
            <img src={error} height={"200px"} width={"300px"} alt={"Error 404 - Page not found"} />
        </div>
    );
}

export default Page404;
