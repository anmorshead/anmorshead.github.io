export default function Header(){

    return(
        <div className="grid grid-cols-12 m-10">
            <div className="andrea col-span-5 col-start-2 h-full w-full flex items-center justify-center">
                <h1 className="text-center font-stick-no-bills font-semi-bold text-white text-6xl aspect-square p-12 border-8 border-white rounded-xl box-border shadow-2xl shadow-white text-shadow" >ANDREA MORSHEAD<br></br>WEB DEVELOPER</h1>
            </div>
            <div className="arrows col-span-5 col-start-8">
                <img className="rotate-180" src="images/neon-arrow.png"/>
            </div>
        
        </div>
    )
}