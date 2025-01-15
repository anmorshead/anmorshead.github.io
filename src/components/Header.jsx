export default function Header() {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-12 m-10 gap-x-0">
            <div className="andrea md:col-span-5 md:col-start-3 mt-24">
                <img src="images/andrea-logo2.png"/>
            </div>
            <div className="arrows md:col-span-5 md:col-start-8 flex justify-center animate__animated animate__flash animate__infinite animate__slower">
                <img className="rotate-180" src="images/neon-arrow.png" />
            </div>
        </div>
    );
}
