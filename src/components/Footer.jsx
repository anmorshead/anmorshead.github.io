export default function Footer() {
    return (
        <div className="footer relative bg-black/70 text-white pt-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
                <div className="halifax col-span-1 md:col-span-4 p-8 flex flex-col items-center lg:border-r border-white">
                    <div className="flex items-center space-x-4">
                        <img src="images/neon-location.png" className="h-6 w-6" />
                        <h2>Halifax, NS</h2>
                    </div>
                </div>
                <div className="email col-span-1 md:col-span-4 p-8 flex flex-col items-center lg:border-r border-white">
                    <div className="flex items-center space-x-4">
                        <img src="images/neon-mail.png" className="h-6 w-6" />
                        <h2>andrea.morshead@gmail.com</h2>
                    </div>
                </div>
                <div className="github col-span-1 md:col-span-4 p-8 flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                        <img src="images/compas.png" className="h-6 w-6" />
                        <h2>
                            <a
                                href="https://github.com/anmorshead"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                GitHub
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
            <p className="copyright text-center mt-5 text-xs p-5">&copy; Andrea Morshead | 2024</p>
        </div>
    );
}

