export default function Header() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 m-10 gap-4">
            <div className="andrea md:col-span-5 md:col-start-2 aspect-square flex items-center justify-center border-4 sm:border-8 border-white rounded-xl shadow-2xl shadow-white overflow-hidden">
                <h1 className="text-center font-stick-no-bills font-semi-bold text-white text-4xl sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl p-10 text-shadow">
                    ANDREA MORSHEAD<br />WEB DEVELOPER
                </h1>
            </div>
            <div className="arrows md:col-span-5 md:col-start-8 flex justify-center animate__animated animate__flash animate__infinite animate__slower">
                <img className="rotate-180" src="images/neon-arrow.png" />
            </div>
        </div>
    );
}
