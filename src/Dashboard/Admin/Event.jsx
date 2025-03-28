import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";
import Todo from "../Todo/todo";

const Events = () => {
    // Sample data for props
    const boxInfoData = [
        { id: 1, icon: "bx-user", count: 100, label: "Users" },
        { id: 2, icon: "bx-cart", count: 50, label: "Orders" },
        { id: 3, icon: "bx-dollar", count: "$5K", label: "Revenue" },
    ];

    const sampleTodos = [
        { task: "Fix bug in login form", completed: false },
        { task: "Review pull request", completed: true },
        { task: "Update documentation", completed: false },
    ];

    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content"> 
                <Content />
                <Todo 
                    title="Event Post" 
                    boxInfoData={boxInfoData} 
                    sampleTodos={sampleTodos} 
                />
                {/* <Main /> */}
            </div>
        </div>
    );
};

export default Events;
