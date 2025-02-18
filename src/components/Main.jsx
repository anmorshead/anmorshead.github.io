// import NavBar from "./NavBar";
// import Header from "./Header";
// import About from "./About";
// import Skills from "./Skills";
// import Footer from "./Footer";
// import '../App.css';

// export default function Main() {
//     return (
//         <div className="bg-dark-blue bg-fixed bg-custom-gradient -mt-16">
//             <div className="absolute top-0 left-0 w-full h-full bg-pink-dots bg-fixed z-0 transform -translate-y-2 opacity-30"></div> {/* Pink Dots Layer */}
//             <div className="absolute top-0 left-0 w-full h-full bg-blue-dots bg-fixed z-0 transform -translate-y-1 opacity-30"></div> {/* Blue Dots Layer */}
//             <NavBar />
//             <Header />
//             <About />
//             <Skills />
//             <Footer />
//         </div>
//     );
// }
import { useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import '../App.css';

export default function Main() {
    // Parallax Effect Logic
    useEffect(() => {
        const handleScroll = () => {
            // Get scroll position
            const scrollY = window.scrollY;

            // Set transform styles for parallax effect
            const pinkDots = document.getElementById("pink-dots");
            const blueDots = document.getElementById("blue-dots");

            // Modify the scroll speed for each layer
            pinkDots.style.transform = `translateY(${scrollY * 0.3}px)`; 
            blueDots.style.transform = `translateY(${scrollY * 0.8}px)`; 
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-dark-blue bg-fixed bg-custom-gradient -mt-16 relative overflow-hidden">
            <div
                id="pink-dots"
                className="absolute top-0 left-0 w-full h-full bg-pink-dots bg-repeat z-0 opacity-30">
            </div> 
            <div
                id="blue-dots"
                className="absolute top-0 left-0 w-full h-full bg-blue-dots bg-repeat z-10 opacity-30">
            </div> 

            <div className="relative z-10">
                <NavBar />
                <Header />
                <About />
                <Skills />
                <Footer />
            </div>
        </div>
    );
}


