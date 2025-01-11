import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

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
        <nav className="sticky top-0 px-6 bg-black/75 text-white z-10">
            {/* Navbar container */}
            <div className="flex justify-between items-center">
                {/* Welcome image */}
                <div className="flex items-center">
                    <img src="images/neonwelcome.png" className="h-10 object-contain m-2" alt="Welcome" />
                </div>

                {/* Hamburger button */}
                <button
                    className="block md:hidden text-2xl text-[#FF6ED1]"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    &#9776;
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-12 text-xl items-center font-stick-no-bills">
                    <li className={`text-[#FF6ED1] ${isHome ? 'underline' : ''}`}>
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="images/neonhome.png" alt="Home Icon" className="h-5 w-5 mx-1 object-contain" />
                            Home
                        </Link>
                    </li>
                    <li className={`text-[#FFD041] ${isProjects ? 'underline' : ''}`}>
                        <Link to="/projects" className="flex items-center space-x-2">
                            <img
                                src="images/neon-folder.png"
                                alt="Folder Icon"
                                className="h-5 w-5 mx-1 object-contain"
                            />
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile menu */}
            {isMobileMenuVisible && (
                <ul className="flex flex-col space-y-4 text-xl items-center font-stick-no-bills md:hidden">
                    <li className={`text-[#FF6ED1] ${isHome ? 'underline' : ''}`}>
                        <Link to="/" onClick={toggleMobileMenu} className="flex items-center space-x-2">
                            <img src="images/neonhome.png" alt="Home Icon" className="h-5 w-5 mx-1 object-contain" />
                            Home
                        </Link>
                    </li>
                    <li className={`text-[#FFD041] ${isProjects ? 'underline' : ''}`}>
                        <Link to="/projects" onClick={toggleMobileMenu} className="flex items-center space-x-2 mb-10">
                            <img
                                src="images/neon-folder.png"
                                alt="Folder Icon"
                                className="h-5 w-5 mx-1 object-contain"
                            />
                            Projects
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}


