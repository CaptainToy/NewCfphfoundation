import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS

const Todo = () => {
    // Sample Data
    const boxInfoData = [
        { id: 2, icon: "bxs-group", count: 2834, label: "Visitors" },
        { id: 3, icon: "bxs-dollar-circle", count: "2543", label: "Form" }
    ];

    const sampleOrders = [
        { name: "John Doe", date: "01-10-2021"},
        { name: "Jane Smith", date: "02-10-2021"},
        { name: "Mark Wilson", date: "03-10-2021" },
        { name: "Emily Johnson", date: "04-10-2021"},
        { name: "Michael Brown", date: "05-10-2021"}
    ];

    const sampleTodos = [
        { task: "Finish React project", completed: true },
        { task: "Update dashboard UI", completed: true },
        { task: "Fix bug in authentication", completed: false },
        { task: "Write documentation", completed: true },
        { task: "Optimize performance", completed: false }
    ];

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
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
                        <h3>Todos</h3>
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
