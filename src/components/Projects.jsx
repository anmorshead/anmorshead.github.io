import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import { Fade } from "@mui/material";
import Masonry from '@mui/lab/Masonry';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/cardTheme';

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
      chipNames: [
        { name: "Java", icon: "images/java.png" },
      ],
    },
    {
      title: "Cat Forum",
      description:
        "I created a Discussion Forum for cat lovers using the Entity framework in ASP.NET with C#. This forum is styled using responsive Bootstrap",
      link: "https://github.com/anmorshead/CatForum",
      image: "images/catForum.png",
      gif: "images/catForum.gif",
      chipNames: [
        { name: "C#", icon: "images/CSharp.png" },
        { name: "ASP.NET", icon: "images/Net.png" },
        { name: "Bootstrap", icon: "images/Bootstrap.png" },
      ],
    },
    {
      title: "Screensaver",
      description:
        "An interactive screensaver shows shapes moving around a screen, colliding with other shapes and the edges of the screen, click to add an additional shape.",
      link: "https://github.com/anmorshead/Screensaver",
      image: "images/screensaver.png",
      gif: "images/screensaver.gif",
      chipNames: [
        { name: "Java", icon: "images/java.png" },
      ],
    },
    {
      title: "Weather Week",
      description:
        "A simple JavaScript web app that displays a graph of your chosen weather type for a selected city over the period of a week. It uses data from the tomorrow.io API and Chart.js to display the data",
      link: "https://github.com/anmorshead/Weather-API-Website",
      image: "images/weather-week.png",
      gif: "images/weather-week.gif",
      chipNames: [
        { name: "JavaScript", icon: "images/js.png" },
        { name: "HTML", icon: "images/html.png" },
        { name: "CSS", icon: "images/css.png" },
      ],
    },
    {
      title: "Taskmaster Task Sorting App",
      description:
        "Users can enter their tasks/projects, and their respective due dates. The App sorts them based on priority. When finished with the task the user can add it to the list of their completed tasks.",
      link: "https://github.com/anmorshead/DynamicTaskSortingProject",
      image: "images/taskmaster.png",
      gif: "images/taskmaster.gif",
      chipNames: [
        { name: "MongoDB", icon: "images/MongoDB.png" },
        { name: "Express.js", icon: "images/Express.png" },
        { name: "React", icon: "images/react.png" },
        { name: "Node", icon: "images/Node.js.png" },
      ],
    },
    {
      title: "Canadian Flight Tracker",
      description:
        "I created a web app that allows users to see info about flights leaving from Canadian Airports using data gathered from the open sky API, and mapped using Leaflet.js.",
      link: "https://github.com/anmorshead/Canadian-flight-Tracker-App",
      image: "images/flight-tracker.png",
      gif: "images/flight-tracker.gif",
      chipNames: [
        { name: "JavaScript", icon: "images/js.png" },
      ],
    },
    {
      title: "NSCC site Redesign",
      description:
        "Using a Figma wireframe I worked to redesign the NSCC website to improve the overall flow of the site and give it a more modern look.",
      link: "https://github.com/anmorshead/NSCC-Redesign",
      image: "images/nscc-redesign.png",
      gif: "images/nscc-redesign.gif",
      chipNames: [
        { name: "HTML", icon: "images/html.png" },
        { name: "Tailwind", icon: "images/Tailwind.png" },
        { name: "Figma", icon: "images/figma.png" },
      ],
    },
    {
      title: "Chirper",
      description:
        "Using the Laravel Chirper project walk-through, I added additional functionality including liking posts, bookmarks, and media uploads.",
      link: "https://github.com/anmorshead/Chirper",
      image: "images/Chirper-gif.png",
      gif: "images/Chirper-gif.gif",
      chipNames: [
        { name: "Laravel", icon: "images/Laravel.png" },
        { name: "PHP", icon: "images/php.png" },
        { name: "JavaScript", icon: "images/js.png" },
        { name: "Tailwind", icon: "images/Tailwind.png" },
      ],
    },
    {
      title: "Favourite Cars App",
      description:
        "Users can create accounts and add/edit/delete cars from my list of favourite cars.",
      link: "https://github.com/anmorshead/FavouriteCarsReactApp",
      image: "images/favCars-gif.png",
      gif: "images/favCars-gif.gif",
      chipNames: [
        { name: "MongoDB", icon: "images/MongoDB.png" },
        { name: "Express.js", icon: "images/Express.png" },
        { name: "React", icon: "images/react.png" },
        { name: "Node", icon: "images/Node.js.png" },
        { name: "Tailwind", icon: "images/Tailwind.png" },
      ],
    },
    {
      title: "Cities Database",
      description:
        "I created a website in basic PHP that allows for the viewing, searching, inserting, updating, and deleting of city records from the MySQL world sample database. Forms to allow for insertion and update have client-side validation of valid input. Only authenticated users will be able to access the system.",
      link: "https://github.com/anmorshead/CitiesDatabase",
      image: "images/citiesDB-gif.png",
      gif: "images/citiesDB-gif.gif",
      chipNames: [
        { name: "PHP", icon: "images/php.png" },
        { name: "JavaScript", icon: "images/js.png" },
        { name: "MySQL", icon: "images/MySQL.png" },
      ],
    },
    {
      title: "Poker Hand Generator",
      description:
        "This Program will randomly generate 5 cards and tell you which hand you have in a Poker Game",
      link: "https://github.com/anmorshead/Poker-Hand",
      image: "images/poker-hand.png",
      gif: "images/poker-hand.gif",
      chipNames: [
        { name: "HTML", icon: "images/html.png" },
        { name: "CSS", icon: "images/css.png" },
        { name: "JavaScript", icon: "images/js.png" },
      ],
    },
    {
      title: "Wordpress News Site Theme",
      description:
        "This theme can be added into your Wordpress site to display news articles organized by categories.",
      link: "https://github.com/anmorshead/OnlineNewsTheme",
      image: "images/newsSite.png",
      gif: "images/newsSite.gif",
      chipNames: [
        { name: "Wordpress", icon: "images/wordpress.png" },
        { name: "PHP", icon: "images/php.png" },
        { name: "Bootstrap", icon: "images/Bootstrap.png" },
      ],
    },
    
  ];

  // Add cards one by one with a delay
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards((prev) =>
        prev.length < projectData.length ? [...prev, prev.length] : prev
      );
    }, 200); 

    return () => clearInterval(timer); // Clear the interval
  }, [projectData.length]);

  return (
    <ThemeProvider theme={theme}>
        <NavBar />
        <div className="bg-project-bg bg-fixed">
          <div className="flex justify-center items-center">
          <Masonry className="mt-10"
              sx={{ marginTop: '4.5rem' }}
              columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} // Adjust number of columns based on screen size
              spacing={4} // Spacing between items
            >
              {projectData.map((project, index) => (
                  <Fade
                  key={index}
                  in={visibleCards.includes(index)} 
                  timeout={500} 
                  >
                  <div>
                      <ProjectCard {...project} />
                  </div>
                  </Fade>
              ))}
              </Masonry>
          </div>
        <Footer />
        </div>
    </ThemeProvider>
  );
}
