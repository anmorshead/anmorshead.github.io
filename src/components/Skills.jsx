import Skill from "./Skill";

export default function Skills() {
    const skills = [
        { name: "JavaScript", color: "#FFD700" }, 
        { name: "Java", color: "#FF0598" },      
        { name: "HTML/CSS", color: "#ACF39D" },   
        { name: "PHP", color: "#A0C4FF" },       
        { name: "MongoDB", color: "#FFCFD2" },    
        { name: "SQL", color: "#EE70FF" },       
        { name: "React", color: "#EE7B30" },     
        { name: "Laravel", color: "#36C9C6" },    
        { name: "Wordpress", color: "#EDFF86" },  
        { name: "Git", color: "#F1C0E8" },        
        { name: "Tailwind", color: "#D9FFF8" },   
        { name: "Bootstrap", color: "#51E5FF" },  
    ];

    return (
        <div className="relative bg-white/60 m-10 p-10 rounded-md">
            <h1 className="font-stick-no-bills font-semibold text-2xl mb-6">Skills:</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <Skill key={skill.name} name={skill.name} color={skill.color} />
                ))}
            </div>
        </div>
    );
}
