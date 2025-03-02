import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";
import Todo from "../Todo/todo";

const Dashboard = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <Todo/>
                {/* <Main /> */}
            </div>
        </div>
    );
};

export default Dashboard;



