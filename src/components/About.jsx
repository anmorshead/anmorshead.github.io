import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Paper 
            className="mask-effect p-10 mb-20"
            square
            elevation={3}
            sx={{ backgroundColor: '#fc0fc0' }}
        >
            {/* Grid Layout: Stacks on small screens, Side-by-side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto w-full justify-center m-0 md:m-10">

                {/* About Me Image & Paragraph Container */}
                <div className="col-span-12 md:col-span-6 flex flex-col items-center">
                    
                    {/* About Me Image */}
                    <div className="flex justify-center">
                        <img 
                            className="w-full max-w-[500px] mx-auto mt-5 md:my-10"
                            src="images/aboutMe.png"
                            alt="About Me"
                        />
                    </div>

                    {/* Paragraph Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
                        <div className="col-span-12 md:col-span-12 text-white font-roboto-condensed font-light text-lg md:text-xl px-5">
                            <p>
                                I'm an emerging Web Developer based in Halifax NS, with a background in the creative industries. 
                                In my previous career as a Pastry Chef, I wowed guests with intricate, delicious pastries. Now, I channel that same passion 
                                for detail and design into crafting websites that are as functional as they are eye-catching. I'm all about writing clean code, 
                                solving problems, and finding the most efficient solutions. <br></br>
                                <br></br>When I'm not coding, you can find me at the Bouldering Gym, snuggling up with my cats and good cozy murder mystery, 
                                going for long drives in fast cars, or cooking extravagant meals in my kitchen. 
                                Check out the{' '}
                                <Link
                                    to="/projects"
                                    className="font-bold underline hover:text-gray-300"
                                >
                                    Projects
                                </Link>{' '}
                                tab or dive into my{' '}
                                <a
                                    href="https://github.com/anmorshead"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold underline hover:text-gray-300"
                                >
                                    GitHub
                                </a>{' '}
                                to see what cool stuff I've been working on!
                            </p>
                        </div>
                    </div>

                </div>

                {/* Polaroid Image */}
                <div className="col-span-12 md:col-span-6 flex justify-center items-center md:mr-5 ">
                    <img 
                        src="images/polaroid.png" 
                        alt="Polaroid"
                        className="h-full max-h-[600px] w-auto object-contain transition-transform duration-300 ease-in-out hover:rotate-3"
                    />
                </div>

                <div className="col-span-12 flex justify-between items-center m-10 space-x-4">
                    <img src="images/cat.png" alt="Cat" className="w-20 h-20 lg:w-48 lg:h-48 object-contain hover:animate-dimlight" />
                    <img src="images/cupcake.png" alt="Cupcake" className="w-20 h-20 lg:w-48 lg:h-48 object-contain hover:animate-dimlight" />
                    <img src="images/car.png" alt="Car" className="w-20 h-20 lg:w-48 lg:h-48 object-contain hover:animate-dimlight" />
                    <img src="images/pizza.png" alt="Pizza" className="w-20 h-20 lg:w-48 lg:h-48 object-contain hover:animate-dimlight" />
                </div>
            </div>
        </Paper>
    );
}
