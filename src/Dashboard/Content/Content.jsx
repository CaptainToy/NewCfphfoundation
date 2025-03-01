import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS

const Content = () => {
        const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
    
        useEffect(() => {
            const handleResize = () => {
                setIsSidebarHidden(window.innerWidth < 768);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    
    return (
        <nav>
            <button onClick={() => setIsSidebarHidden(!isSidebarHidden)} className="menu-toggle">
                <i className="bx bx-menu"></i>
            </button>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn">
                        <i className="bx bx-search"></i>
                    </button>
                </div>
            </form>
            <a href="#" className="notification">
                <i className="bx bxs-bell"></i>
                <span className="num">8</span>
            </a>
            <a href="#" className="profile">
                <img src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="Profile" />
            </a>
        </nav>
    );
};

export default Content;
