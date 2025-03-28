import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";
import MessageTodo from "../message/message";

const Message = () => {
    const boxInfoData = [
        { id: 2, icon: "bxs-group", count: 2834, label: "Message" },
    ];

    const sampleTodos = [
        { task: "Finish React project", completed: true },
        { task: "Update dashboard UI", completed: true },
        { task: "Fix bug in authentication", completed: false },
        { task: "Write documentation", completed: true },
        { task: "Optimize performance", completed: false }
    ];
    
    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <MessageTodo boxInfoData={boxInfoData} sampleTodos={sampleTodos} title="User Management"/>
            </div>
        </div>
    );
};

export default Message;
