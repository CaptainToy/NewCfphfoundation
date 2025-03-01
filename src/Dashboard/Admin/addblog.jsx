import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";
import AddBlog from "../addBlog/addBlog";

const Admin = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <AddBlog/>
                {/* <Main /> */}
            </div>
        </div>
    );
};

export default Admin;
