import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; 
import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import Todo from "../Todo/todo";

import "../css/style.css";

const TodoApp = () => {
    const [userCount, setUserCount] = useState(0);
    const [sampleTodos, setSampleTodos] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(db, "users");
                const userSnapshot = await getDocs(usersCollection);
                const usersList = userSnapshot.docs.map(doc => ({
                    task: doc.data().email || "Unnamed User", 
                    completed: doc.data().completed || false 
                }));

                setSampleTodos(usersList);
                setUserCount(usersList.length);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const boxInfoData = [
        { id: 1, icon: "bxs-group", count: 2834, label: "Visitors" },
        { id: 2, icon: "bxs-dollar-circle", count: userCount, label: "Users" }
    ];

    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <Todo boxInfoData={boxInfoData} sampleTodos={sampleTodos} title="User Management" />
                {/* <Main /> */}
            </div>
        </div>
    );
};

export default TodoApp;
