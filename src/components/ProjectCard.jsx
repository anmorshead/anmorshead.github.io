import { useState } from 'react';
import { Card, Typography, Chip } from '@mui/material';

export default function ProjectCard({ title, description, image, gif, id, chipNames, link }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <Card
            sx={{
                maxWidth: 650,
                boxShadow: 15,
            }}
            onMouseEnter={() => setHoveredCard(id)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            {/* Image Section */}
            <div className="relative">
                {/* For larger screens: Toggle between still image and GIF on hover */}
                <img
                    src={hoveredCard === id ? gif : image}
                    alt={title}
                    className="w-full h-auto object-contain hidden md:block"
                />

                {/* For smaller screens: Always show the GIF */}
                <img
                    src={gif}
                    alt={`${title} gif`}
                    className="w-full h-auto object-contain block md:hidden"
                />
            </div>

            {/* Title */}
            <Typography className="p-4" gutterBottom variant="h5" component="div">
                {title}
            </Typography>

            {/* Description */}
            <Typography className="px-4" variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
                <br /><br />
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    GitHub Repo
                </a>
            </Typography>

            {/* Chips */}
            <div className="p-4 space-x-2 space-y-2">
                {chipNames.map((chip) => (
                    <Chip key={chip} label={chip} variant="outlined" />
                ))}
            </div>
        </Card>
    );
}
