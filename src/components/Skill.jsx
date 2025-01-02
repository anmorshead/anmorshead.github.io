export default function Skill({ name, color }) {
    return (
        <div
            className={`p-4 rounded-md text-black text-center font-medium shadow-md transform transition-transform duration-300 hover:scale-105`}
            style={{ backgroundColor: color }}
        >
            {name}
        </div>
    );
}
