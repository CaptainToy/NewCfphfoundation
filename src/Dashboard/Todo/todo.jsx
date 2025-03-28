import "boxicons/css/boxicons.min.css"; 

const Todo = ({ boxInfoData, sampleTodos, title }) => {
    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>{title}</h1> 
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li><i className="bx bx-chevron-right"></i></li>
                        <li>
                            <a className="active" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Dynamic Box Info Section */}
            <ul className="box-info">
                {boxInfoData.map((item) => (
                    <li key={item.id}>
                        <i className={`bx ${item.icon}`}></i>
                        <span className="text">
                            <h3>{item.count}</h3>
                            <p>{item.label}</p>
                        </span>
                    </li>
                ))} 
            </ul>

            {/* Tables & Todos Section */}
            <div className="table-data">
                {/* Todo List Section */}
                <div className="todo">
                    <div className="head">
                        <h3>{title}</h3> {/* Use title prop instead of item.title */}
                        <i className="bx bx-plus"></i>
                        <i className="bx bx-filter"></i>
                    </div>
                    <ul className="todo-list">
                        {sampleTodos.map((todo, index) => (
                            <li key={index} className={todo.completed ? "completed" : "not-completed"}>
                                <p>{todo.task}</p>
                                <i className="bx bx-dots-vertical-rounded"></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Todo;
