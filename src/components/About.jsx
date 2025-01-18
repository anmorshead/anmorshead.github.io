import { Paper, Avatar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Paper className=""
            square
            elevation={3} // Shadow depth
            sx={{
                backgroundColor: '#fc0fc0', 
                padding: 5, 
                marginBottom: 20,
            }}
        >
            <img className='w-full max-w-[500px]'
                src="images/aboutMe.png"
                alt="About Me"
            />
            <div className="grid grid-cols-1 md:grid-cols-12 items-center mt-5 gap-4">
                <Avatar
                    className='m-auto mb-10 md:col-span-5 md:mt-10' 
                    alt="Andrea Morshead"
                    src="images/profile.jpg" 
                    sx={{
                        width: 200, 
                        height: 200,
                        boxShadow: '0 0 10px 3px white',
                    }}
                />

                    <div className= "md:col-span-7 text-white text-lg md:text-xl">
                        <p>
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
                        </p>
                </div>
            </div>
        </Paper>
    );
}
