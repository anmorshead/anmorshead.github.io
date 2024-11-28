import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import '../App.css'

export default function Main(){
    return(
        <div className="bg-main-bg bg-cover">
            <NavBar />
            <Header/>
            <About/>
            <Skills/>
        </div>
    )
}