import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";

const team = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                {/* <Main /> */}
            </div>
        </div>
    );
};

export default team;
