import Skill from "./Skill";

export default function Skills() {
    const skills = [
        { name: "JavaScript", color: "#FFEE93" }, // pastel yellow
        { name: "Java", color: "#FFADAD" },       // pastel red
        { name: "HTML/CSS", color: "#B9FBC0" },  // pastel green
        { name: "PHP", color: "#A0C4FF" },       // pastel blue
        { name: "MongoDB", color: "#FFCFD2" },   // pastel pink
        { name: "SQL", color: "#C4B7E7" },       // pastel purple
        { name: "React", color: "#FFD6A5" },     // pastel peach
        { name: "Laravel", color: "#D0F4DE" },   // pastel mint
        { name: "Wordpress", color: "#FDE2E4" }, // pastel rose
        { name: "Git", color: "#F1C0E8" },       // pastel lavender
        { name: "Tailwind", color: "#FAE3D9" },  // pastel cream
        { name: "Bootstrap", color: "#BDE0FE" }, // pastel sky
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
