import { useState } from 'react';
import { Card, CardMedia, Typography, Chip, Divider } from '@mui/material';

export default function ProjectCard({ title, description, image, gif, id, chipNames, link }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        
        <Card  
            // variant="solid" 
            sx={{ maxWidth: 650,
                    boxShadow: 15
             }} 
            className=""
            onMouseEnter={() => setHoveredCard(id)} 
            onMouseLeave={() => setHoveredCard(null)}
        >
            <CardMedia
                sx={{ height: "auto", // Let the height adjust dynamically
                    width: "100%", // Ensure the width scales with the card
                    objectFit: "contain" }}
                component="img"
                image={hoveredCard === id ? gif : image}
                title={title}
            />
            <Typography className="p-4" gutterBottom variant="h5" component="div">
                {title}
            </Typography>

            <Typography className="px-4" variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
                <br/><br/>
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    GitHub Repo
                </a>
            </Typography>
            
            <div className="p-4 space-x-2 space-y-2">
                {chipNames.map(chip => (
                    <Chip key={chip} label={chip} variant="outlined" />
                ))}
            </div>
        </Card>
    );
}