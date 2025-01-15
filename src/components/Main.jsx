import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import '../App.css'

export default function Main(){
    return(
        <div className="bg-main-bg bg-fixed background">
            <NavBar />
            <Header/>
            <About/>
            <Skills/>
            <Footer/>
        </div>
    )
}