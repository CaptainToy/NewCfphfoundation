import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";

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
