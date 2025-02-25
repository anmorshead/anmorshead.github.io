import Skill from "./Skill";
import { Paper } from '@mui/material';

export default function Skills() {
    const skills = [
        { name: "JavaScript", color: "#8FF0FB", icon: "images/js.png" }, 
        { name: "Java", color: "#F6E05D", icon: "images/java.png" },      
        { name: "HTML", color: "#CFF8FD", icon: "images/html.png" },  
        { name: "CSS", color: "#FF63D8", icon: "images/css.png" },  
        { name: "PHP", color: "#FA57D1", icon: "images/php.png" },       
        { name: "MongoDB", color: "#FF8CE2", icon: "images/MongoDB.png" },    
        { name: "SQL", color: "#FC0FC0", icon: "images/MySQL.png" },       
        { name: "React", color: "#8FF0FB", icon: "images/react.png" },     
        { name: "Laravel", color: "#B9F4FA", icon: "images/Laravel.png" },    
        { name: "Wordpress", color: "#CFF8FD", icon: "images/wordpress.png" },  
        { name: "Git", color: "#FBD90B", icon: "images/git.png" },        
        { name: "Tailwind", color: "#F6E05D", icon: "images/Tailwind.png" },   
        { name: "Bootstrap", color: "#FDEE93", icon: "images/Bootstrap.png" },  
        { name: ".NET", color: "#FF63D8", icon: "images/Net.png" }, 
        { name: "Node.js", color: "#FA57D1", icon: "images/Node.js.png" }, 
        { name: "Express.js", color: "#FF8CE2", icon: "images/Express.png" }, 
        { name: "Figma", color: "#FC0FC0", icon: "images/figma.png" },
        { name: "C#", color: "#8FF0FB", icon: "images/CSharp.png" },  
        { name: "Next.js", color: "#FDEE93", icon: "images/Next.js.png" },  
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
