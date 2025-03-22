import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const sidebarMenu = [
    { id: 1, icon: "bxs-dashboard", text: "Dashboard", path: "/dashboard" },
    { id: 2, icon: "bxl-blogger", text: "Add Blog", path: "/add-blog" },
    { id: 3, icon: "bx bx-calendar-event", text: "Events", path: "/events" },
    { id: 4, icon: "bxs-message-dots", text: "Message", path: "/message" },
    { id: 5, icon: "bxs-group", text: "Team", path: "/team" }
];

const sidebarSettings = [
    { id: 6, icon: "bxs-cog", text: "Settings", path: "/settings" },
    { id: 7, icon: "bxs-log-out-circle", text: "Logout", path: "/" }
];


const Sidebar = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(null);
    const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarHidden(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const activeItem = sidebarMenu.find(item => item.path === location.pathname);
        if (activeItem) {
            setActiveMenu(activeItem.id);
        }
    }, [location.pathname]);

    return (
        <aside id="sidebar" className={isSidebarHidden ? "hide" : ""}>
            <a href="#" className="brand">
                <i className="bx bxs-smile"></i>
                <span className="text">CFPHF</span>
            </a>

            <ul className="side-menu top">
                {sidebarMenu.map((item) => (
                    <li key={item.id} className={activeMenu === item.id ? "active" : ""}>
                        <Link to={item.path}>
                            <i className={`bx ${item.icon}`}></i>
                            <span className="text">{item.text}</span>
                        </Link>
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

            <button onClick={() => setIsSidebarHidden(!isSidebarHidden)} className="menu-toggle">
                <i className="bx bx-menu"></i>
            </button>
        </aside>
    );
};

export default Sidebar;
