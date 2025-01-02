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
                    description="In this Shubie Park themed game, you might choose to be an Elven Deer, fighting a mighty Squirrel Gang or even the dreaded Park Compliance Wizard." 
                    github="https://github.com/anmorshead/DND-Style-Game"
                />
                 <ProjectCard 
                    image="images/screensaver.gif" 
                    name="Screensaver" 
                    stack="Java, Java Swing" 
                    description="An interactive screensaver shows shapes moving around a screen and colliding with other shapes and the edges of the screen, click to add an additional shape." 
                    github="https://github.com/anmorshead/Screensaver"
                />
                <ProjectCard 
                    image="images/weather-week.gif" 
                    name="Weather Week" 
                    stack="Java Script, Chart.js, Tomorrow.io weather API" 
                    description="A simple JavaScript web app that displays a graph of your chosen weather type for a selected city over the period of a week." 
                    github="https://github.com/anmorshead/Weather-API-Website"
                />
                 <ProjectCard 
                    image="images/taskmaster.gif" 
                    name="Taskmaster Task Sorting App" 
                    stack="MongoDB, Express.js, React, Node.js" 
                    description="Users can enter their  tasks/projects, and their respective due dates. The App sorts them based on priority. When finished with the task the user can add it to the list of their completed tasks." 
                    github="https://github.com/anmorshead/DynamicTaskSortingProject"
                />
                <ProjectCard 
                    image="images/flight-tracker.gif" 
                    name="Canadian Flight Tracker" 
                    stack="JavaScript, leaflet.js, openSky API" 
                    description="I created a web app that allows users to see info about flights leaving from Canadian Airports using data gathered from the open sky API." 
                    github="https://github.com/anmorshead/Canadian-flight-Tracker-App"
                />
                <ProjectCard 
                    image="images/nscc-redesign.png" 
                    name="NSCC site Redesign" 
                    stack="HTML, Tailwind CSS" 
                    description="Using a Figma wireframe I worked to redesign the NSCC website to improve the overall flow of the site and give it a more modern look." 
                    github="https://github.com/anmorshead/NSCC-Redesign"
                />
                <ProjectCard 
                    image="images/Chirper-gif.gif" 
                    name="Chirper" 
                    stack="Laravel, Tailwind CSS" 
                    description="Using the laravel Chirper project walk through I added additional functionality including liking posts, bookmarks, and media uploads" 
                    github="https://github.com/anmorshead/Chirper"
                />
                <ProjectCard 
                    image="images/favCars-gif.gif" 
                    name="Favourite Cars App" 
                    stack="MongoDB, Express.js, React, Node.js" 
                    description="Users can create account and add/edit/delete cars from my list of favourite cars" 
                    github="https://github.com/anmorshead/FavouriteCarsReactApp"
                />
                <ProjectCard 
                    image="images/citiesDB-gif.gif" 
                    name="Cities Database" 
                    stack="PHP, MySQL" 
                    description="I created a web site in basic PHP that allows for the viewing, searching, inserting, updating, and deleting of city records from the MySQL world sample database. Forms to allow for insertion and update have client-side validation of valid input. Only authenticated users will be able to access the system." 
                    github="https://github.com/anmorshead/CitiesDatabase"
                />
            </div>
            <Footer />
        </div>
    );
}
