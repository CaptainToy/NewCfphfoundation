import "boxicons/css/boxicons.min.css";

const Main = ({ sampleTodos = [], userCount = 0 }) => {  // Accept userCount as a prop with default value 0
    const boxInfoData = [
        { id: 1, icon: "bxs-calendar-check", count: 1020, label: "Blog Post" },
        { id: 2, icon: "bxs-group", count: 2834, label: "Visitors" },
        { id: 3, icon: "bxs-dollar-circle", count: userCount, label: "Users" }  // Ensure userCount is defined
    ];

    const sampleOrders = [
        { name: "John Doe", date: "01-10-2021" },
        { name: "Jane Smith", date: "02-10-2021" },
        { name: "Mark Wilson", date: "03-10-2021" },
        { name: "Emily Johnson", date: "04-10-2021" },
        { name: "Michael Brown", date: "05-10-2021" }
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
                {/* Recent Orders Table */}
                <div className="order">
                    <div className="head">
                        <h3>Recent Blogs</h3>
                        <i className="bx bx-search"></i>
                        <i className="bx bx-filter"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Blog img</th>
                                <th>Blog Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src="img/people.png" alt="User" />
                                        <p>{order.name}</p>
                                    </td>
                                    <td>{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Todo List Section */}
                <div className="todo">
                    <div className="head">
                        <h3>User Management</h3>
                        <i className="bx bx-plus"></i>
                        <i className="bx bx-filter"></i>
                    </div>
                    <ul className="todo-list">
                        {sampleTodos.length > 0 ? (
                            sampleTodos.map((todo, index) => (
                                <li key={index} className={todo.completed ? "completed" : "not-completed"}>
                                    <p>{todo.task}</p>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </li>
                            ))
                        ) : (
                            <p>No todos available</p>
                        )}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Main;
