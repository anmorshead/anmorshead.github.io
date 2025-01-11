import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import { Fade } from "@mui/material";

export default function Projects() {
  // State to track which cards are visible
  const [visibleCards, setVisibleCards] = useState([]);

  // Project data
  const projectData = [
    {
      title: "DND Style Game",
      description:
        "In this Shubie Park themed game, you might choose to be an Elven Deer, fighting a mighty Squirrel Gang or even the dreaded Park Compliance Wizard.",
      link: "https://github.com/anmorshead/DND-Style-Game",
      image: "images/shubie-park.png",
      gif: "images/shubie-park.gif",
      chipNames: ["Java", "Java Swing"],
    },
    {
      title: "Screensaver",
      description:
        "An interactive screensaver shows shapes moving around a screen and colliding with other shapes and the edges of the screen, click to add an additional shape.",
      link: "https://github.com/anmorshead/Screensaver",
      image: "images/screensaver.png",
      gif: "images/screensaver.gif",
      chipNames: ["Java", "Java Swing"],
    },
    {
      title: "Weather Week",
      description:
        "A simple JavaScript web app that displays a graph of your chosen weather type for a selected city over the period of a week.",
      link: "https://github.com/anmorshead/Weather-API-Website",
      image: "images/weather-week.png",
      gif: "images/weather-week.gif",
      chipNames: ["JavaScript", "Chart.js", "Tomorrow.io API"],
    },
    {
      title: "Taskmaster Task Sorting App",
      description:
        "Users can enter their tasks/projects, and their respective due dates. The App sorts them based on priority. When finished with the task the user can add it to the list of their completed tasks.",
      link: "https://github.com/anmorshead/DynamicTaskSortingProject",
      image: "images/taskmaster.png",
      gif: "images/taskmaster.gif",
      chipNames: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      title: "Canadian Flight Tracker",
      description:
        "I created a web app that allows users to see info about flights leaving from Canadian Airports using data gathered from the open sky API.",
      link: "https://github.com/anmorshead/Canadian-flight-Tracker-App",
      image: "images/flight-tracker.png",
      gif: "images/flight-tracker.gif",
      chipNames: ["JavaScript", "Leaflet.js", "OpenSky API"],
    },
    {
      title: "NSCC site Redesign",
      description:
        "Using a Figma wireframe I worked to redesign the NSCC website to improve the overall flow of the site and give it a more modern look.",
      link: "https://github.com/anmorshead/NSCC-Redesign",
      image: "images/nscc-redesign.png",
      gif: "images/nscc-redesign.png",
      chipNames: ["HTML", "Tailwind CSS"],
    },
    {
      title: "Chirper",
      description:
        "Using the Laravel Chirper project walk-through, I added additional functionality including liking posts, bookmarks, and media uploads.",
      link: "https://github.com/anmorshead/Chirper",
      image: "images/Chirper-gif.png",
      gif: "images/Chirper-gif.gif",
      chipNames: ["Laravel", "PHP", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Favourite Cars App",
      description:
        "Users can create accounts and add/edit/delete cars from my list of favourite cars.",
      link: "https://github.com/anmorshead/FavouriteCarsReactApp",
      image: "images/favCars-gif.png",
      gif: "images/favCars-gif.gif",
      chipNames: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Cities Database",
      description:
        "I created a website in basic PHP that allows for the viewing, searching, inserting, updating, and deleting of city records from the MySQL world sample database. Forms to allow for insertion and update have client-side validation of valid input. Only authenticated users will be able to access the system.",
      link: "https://github.com/anmorshead/CitiesDatabase",
      image: "images/citiesDB-gif.png",
      gif: "images/citiesDB-gif.gif",
      chipNames: ["PHP", "JavaScript", "MySQL"],
    },
  ];

  // Add cards one by one with a delay
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards((prev) =>
        prev.length < projectData.length ? [...prev, prev.length] : prev
      );
    }, 200); // 200ms delay between cards

    return () => clearInterval(timer); // Cleanup the interval
  }, [projectData.length]);

  return (
    <div className="bg-project-bg bg-fixed">
      <NavBar />
      <div className="flex justify-center items-center my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
          {projectData.map((project, index) => (
            <Fade
              key={index}
              in={visibleCards.includes(index)} // Trigger fade-in for visible cards
              timeout={500} // Duration of the fade effect
            >
              <div>
                <ProjectCard {...project} />
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
