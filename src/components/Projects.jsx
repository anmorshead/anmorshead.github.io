import NavBar from "./NavBar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="bg-project-bg bg-cover">
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                <ProjectCard 
                    image="images/shubie-park.gif" 
                    name="DND style-game" 
                    stack="Java, Java Swing" 
                    description=": In this Shubie Park themed game, you might choose to be an Elven Deer, fighting a mighty Squirrel Gang or even the dreaded Park Compliance Wizard." 
                />
                 <ProjectCard 
                    image="images/screensaver.gif" 
                    name="Screensaver" 
                    stack="Java, Java Swing" 
                    description="An interactive screensaver shows shapes moving around a screen and colliding with other shapes and the edges of the screen, click to add an additional shape." 
                />
                <ProjectCard 
                    image="images/weather-week.gif" 
                    name="Weather Week" 
                    stack="Java Script, Chart.js, Tomorrow.io weather API" 
                    description="A simple JavaScript web app that displays a graph of your chosen weather type for a selected city over the period of a week." 
                />
                 <ProjectCard 
                    image="images/taskmaster.gif" 
                    name="Taskmaster Task Sorting App" 
                    stack="MongoDB, Express.js, React, Node.js" 
                    description="Users can enter their  tasks/projects, and their respective due dates. The App sorts them based on priority. When finished with the task the user can add it to the list of their completed tasks." 
                />
                <ProjectCard 
                    image="images/flight-tracker.gif" 
                    name="Canadian Flight Tracker" 
                    stack="JavaScript, leaflet.js, openSky API" 
                    description="I created a web app that allows users to see info about flights leaving from Canadian Airports using data gathered from the open sky API." 
                />
                <ProjectCard 
                    image="images/nscc-redesign.png" 
                    name="NSCC site Redesign" 
                    stack="HTML, Tailwind CSS" 
                    description="Using a Figma wireframe I worked to redesign the NSCC website to improve the overall flow of the site and give it a more modern look." 
                />
            </div>
            <Footer />
        </div>
    );
}
