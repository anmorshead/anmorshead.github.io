export default function Skill({ name, color, icon }) {
    return (
        <div
            className={`p-4 rounded-md text-black text-center font-medium shadow-md transform transition-transform duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
            style={{ backgroundColor: color }}
        >
                <img
                    src={icon}
                    alt={`${name} icon`}
                    className="w-6 h-6 z10" 
                />
            
            {name}
        </div>
    );
}
