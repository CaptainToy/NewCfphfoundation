import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const sidebarMenu = [
    { id: 1, icon: "bxs-dashboard", text: "Dashboard", path: "/admin/Admin" },
    { id: 2, icon: "bxl-blogger", text: "Blog", path: "/admin/BlogPost" },
    { id: 2, icon: "bxl-blogger", text: "Add Blog", path: "/admin/add-post" },
    { id: 3, icon: "bx bx-calendar-event", text: "Events", path: "/admin/events" },
    { id: 4, icon: "bxs-message-dots", text: "Message", path: "/admin/message" },
    { id: 5, icon: "bxs-group", text: "Team", path: "/admin/team" },
];

const sidebarSettings = [
    { id: 6, icon: "bxs-cog", text: "Settings", path: "/admin/settings" },
    { id: 6, icon: "bxs-shuffle", text: "Add User", path: "/admin/Adduser" },
    { id: 7, icon: "bxs-log-out-circle", text: "Logout", path: "/signin" }
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
        setActiveMenu(sidebarMenu.find(item => item.path === location.pathname)?.id || null);
    }, [location.pathname]);

    return (
        <aside id="sidebar" className={isSidebarHidden ? "hide" : ""}>
            <Link to="/" className="brand">
                <i className="bx bxs-smile"></i>
                <span className="text">CFPHF</span>
            </Link>

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
                        <Link to={item.path}>
                            <i className={`bx ${item.icon}`}></i>
                            <span className="text">{item.text}</span>
                        </Link>
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
