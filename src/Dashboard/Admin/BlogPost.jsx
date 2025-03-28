import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";
import Todo from "../Todo/todo";

const BlogPost = () => {
    // Sample data for props
    const boxInfoData = [
        { id: 1, icon: "bx-book", count: 10, label: "Total Posts" },
        { id: 2, icon: "bx-message", count: 45, label: "Comments" },
        { id: 3, icon: "bx-like", count: 120, label: "Likes" },
    ];

    const sampleTodos = [
        { task: "Write new blog post", completed: false },
        { task: "Edit previous post", completed: true },
        { task: "Reply to comments", completed: false },
    ];

    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <Todo 
                    title="Blog Manager" 
                    boxInfoData={boxInfoData} 
                    sampleTodos={sampleTodos} 
                />
                {/* <Main /> */}
            </div>
        </div>
    );
};

export default BlogPost;
