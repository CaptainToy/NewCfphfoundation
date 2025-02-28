import Content from "../Dashboard/Content/Content";
import Main from "../Dashboard/Main/Main";
import Sidebar from "../Dashboard/sidebar/sidebar";
import "../Dashboard/css/style.css";

const Admin = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <Main />
            </div>
        </div>
    );
};

export default Admin;
