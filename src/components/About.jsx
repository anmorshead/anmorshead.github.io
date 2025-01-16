import { Paper, Avatar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Paper
            square
            elevation={3} // Shadow depth
            sx={{
                backgroundColor: '#fc0fc0', 
                padding: 5, 
                marginBottom: 20,
            }}
        >
            {/* About Me Image */}
            <img
                src="images/aboutMe.png" // Replace with your "About Me" image URL
                alt="About Me"
                style={{
                    display: 'block', // Ensures it's treated as a block element
                    width: '500px', // Adjust width to fit your design
                }}
            />

            {/* Avatar and Text Container */}
            <Box
                sx={{
                    display: 'flex', // Use flexbox for layout
                    alignItems: 'center', // Center items vertically
                    gap: 4, // Add spacing between avatar and text
                    justifyContent: 'center', // Center avatar and text horizontally
                }}
            >
                {/* Avatar */}
                <Avatar
                    alt="Andrea Morshead"
                    src="images/profile.jpg" // Replace with your image URL
                    sx={{
                        width: 200, // Set avatar size
                        height: 200,
                        boxShadow: '0 0 10px 3px white',
                    }}
                />

                {/* Text Content */}
                <div>
                    <Typography variant="body4" sx={{ color: '#F2F3F4' }}>
                        I'm an emerging Web Developer based in Halifax NS, with a background in the creative industries. 
                        In my previous career as a Pastry Chef, I wowed guests with intricate, delicious pastries. Now, I channel that same passion 
                        for detail and design into crafting websites that are as functional as they are eye-catching. I'm all about writing clean code, 
                        solving problems, and finding the most efficient solutions. Check out the{' '}
                        <Link
                            to="/projects"
                            style={{ textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            Projects
                        </Link>{' '}
                        tab or dive into my{' '}
                        <a
                            href="https://github.com/anmorshead"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            GitHub
                        </a>{' '}
                        to see what I've been working on!
                    </Typography>
                </div>
            </Box>
        </Paper>
    );
}
