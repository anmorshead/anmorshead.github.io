import Skill from "./Skill";
import { Paper } from '@mui/material';

export default function Skills() {
    const skills = [
        { name: "JavaScript", color: "#fc0fc0", icon: "images/js.png" }, 
        { name: "Java", color: " #FFD700", icon: "images/java.png"},      
        { name: "HTML", color: "#ACF39D", icon: "images/html.png" },  
        { name: "CSS", color: "#CBF56D", icon: "images/css.png" },  
        { name: "PHP", color: "#A0C4FF", icon: "images/php.png" },       
        { name: "MongoDB", color: "#FFCFD2", icon: "images/MongoDB.png" },    
        { name: "SQL", color: "#EE70FF", icon: "images/MySQL.png" },       
        { name: "React", color: "#EE7B30", icon: "images/react.png" },     
        { name: "Laravel", color: "#EDFF86", icon: "images/Laravel.png" },    
        { name: "Wordpress", color: "#36C9C6", icon: "images/wordpress.png" },  
        { name: "Git", color: "#F1C0E8", icon: "images/git.png" },        
        { name: "Tailwind", color: "#D9FFF8", icon: "images/Tailwind.png" },   
        { name: "Bootstrap", color: "#8ff0fb", icon: "images/Bootstrap.png" },  
        { name: "Next.js", color: "#F08700", icon: "images/Next.js.png" }, 
        { name: "Node.js", color: "#52B2CF", icon: "images/Node.js.png" }, 
        { name: "Express.js", color: "#e408fc", icon: "images/Express.png" }, 
        { name: "Figma", color: "#ACF39D", icon: "images/figma.png" },
    ];

    return (
        <Paper
            square
            elevation={3} 
            sx={{
                backgroundColor: '#000000',
                padding: 5, 
                marginBottom:20
            }}
        >
            <img
                src="images/skills.png" 
                alt="About Me"
                style={{
                    display: 'block', 
                    width: '500px', 
                }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                 {skills.map((skill) => (
                     <Skill key={skill.name} name={skill.name} color={skill.color} icon={skill.icon}/>
                 ))}
            </div>
        </Paper>
    );
}
