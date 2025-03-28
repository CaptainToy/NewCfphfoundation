import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import Firebase methods
import { db } from "../../firebase"; 
import Content from "../Content/Content";
import Main from "../Main/Main";
import Sidebar from "../sidebar/sidebar";
import "../css/style.css";

const Dashboard = () => {
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

    return (
        <div className="admin-container">
            <Sidebar />
            <div id="content">
                <Content />
                <Main sampleTodos={sampleTodos} /> {/* Pass the correct prop */}
            </div>
        </div>
    );
};

export default Dashboard;
