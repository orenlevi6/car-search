import "./myFooter.css";

function MyFooter(): JSX.Element {
    return (
        <div className="myFooter">
            <span>כל הזכויות שמורות - אורן לוי {new Date().getFullYear()} &reg;</span>
        </div>
    );
}

export default MyFooter;
