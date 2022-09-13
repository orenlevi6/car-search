import "./homePage.css";
import welcome from "../../../assets/welcome.jpg";

function HomePage(): JSX.Element {
    return (
        <div className="homePage">
            <h1>דף הבית</h1> <hr />
            <br /><br />
            <h3>ברוכים הבאים!</h3>
            <h3>אנא בחרו את סוג הרכב אותו תרצו לבדוק בתפריט</h3> <br /> <br />
            <img src={welcome} height={"200px"} width={"300px"} alt={"Welcome!"} />
        </div>
    );
}

export default HomePage;
