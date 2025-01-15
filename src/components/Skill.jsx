import { Chip, Avatar } from "@mui/material";

export default function Skill({ name, color, icon }) {
    return (
        <Chip
            label={name}
            avatar={<Avatar alt={`${name} icon`} src={icon} />}
            sx={{
                backgroundColor: color, // Use custom color for background
                color: "black", // Ensure text is readable
                fontWeight: "bold",
                boxShadow: 3,
                "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                },
            }}
        />
    );
}

