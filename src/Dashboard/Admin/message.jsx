import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";
import MessageTodo from "../message/message"

const Message = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <MessageTodo/>
            </div>
        </div>
    );
};

export default Message;
