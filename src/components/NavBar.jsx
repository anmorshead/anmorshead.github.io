import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const location = useLocation();

    // Conditionally set the class based on the path
    const isHome = location.pathname === '/';
    const isProjects = location.pathname === '/projects';

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    return (
        <>
            {/* nav bar */}
            <nav className="px-6 grid grid-cols-12 bg-black/75">
                {/* welcome image */}
                <div className="col-span-2">
                    <img src="images/neonwelcome.png" className="h-10 object-contain m-2"/>
                </div>
            
                {/* nav tabs */}
                <ul id="menu" className="col-span-10 flex px-8 space-x-12 text-xl justify-end items-center font-stick-no-bills">
                    <li className={`flex items-center space-x-2 text-[#FF6ED1] ${isHome ? 'underline' : ''}`}>
                        <img src="images/neonhome.png" alt="Home Icon" className="h-5 w-5 mx-1 object-contain"/>Home</li>
                    <li className={`flex items-center space-x-2 text-[#FFD041] ${isProjects ? 'underline' : ''}`}>
                        <img src="images/neon-folder.png" alt="Folder Icon" className="h-5 w-5 mx-1 object-contain"/>Projects</li>
                </ul>
            </nav>
        </>
    )
}
