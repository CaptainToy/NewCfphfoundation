import { useState, useEffect } from "react";

const sidebarMenu = [
    { id: 1, icon: "bxs-dashboard", text: "Dashboard" },
    { id: 2, icon: "bxs-shopping-bag-alt", text: "My Store" },
    { id: 3, icon: "bxs-doughnut-chart", text: "Analytics" },
    { id: 4, icon: "bxs-message-dots", text: "Message" },
    { id: 5, icon: "bxs-group", text: "Team" }
];

const sidebarSettings = [
    { id: 6, icon: "bxs-cog", text: "Settings" },
    { id: 7, icon: "bxs-log-out-circle", text: "Logout" }
];

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(1);
    const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarHidden(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside id="sidebar" className={isSidebarHidden ? "hide" : ""}>
            <a href="#" className="brand">
                <i className="bx bxs-smile"></i>
                <span className="text">AdminHub</span>
            </a>

            <ul className="side-menu top">
                {sidebarMenu.map((item) => (
                    <li key={item.id} className={activeMenu === item.id ? "active" : ""}>
                        <a href="#" onClick={() => setActiveMenu(item.id)}>
                            <i className={`bx ${item.icon}`}></i>
                            <span className="text">{item.text}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <ul className="side-menu">
                {sidebarSettings.map((item) => (
                    <li key={item.id}>
                        <a href="#">
                            <i className={`bx ${item.icon}`}></i>
                            <span className="text">{item.text}</span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Sidebar Toggle Button */}
            <button onClick={() => setIsSidebarHidden(!isSidebarHidden)} className="menu-toggle">
                <i className="bx bx-menu"></i>
            </button>
        </aside>
    );
};

export default Sidebar;
