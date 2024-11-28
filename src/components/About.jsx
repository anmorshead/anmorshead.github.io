export default function About(){
    return(
        <div className="bg-white/60 m-10 p-10 rounded-md grid grid-cols-12">
            <div className="col-span-9">
                <h1 className="font-stick-no-bills font-semibold text-xl">About Me:</h1>
                <br></br>
                <p><strong>Hi!</strong> I'm an emerging Web Developer based in Halifax NS, with a background in the creative industries. In my previous career as a Pastry Chef, I wowed guests with intricate, delicious Pastries. Now, I channel that same passion for detail and design into crafting websites that are as functional as they are eye-catching. I'm all about writing clean code, solving problems, and finding the smartest, most efficient solutions. Check out the <strong>Projects</strong> tab or dive into my <a
                href="https://github.com/anmorshead"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800">GitHub</a> to see what I've been working on!</p>
            </div>
            <div class="col-span-3 flex items-center justify-center ml-5">
                <img class="rounded-full shadow-2xl shadow-white" src="images/profile.jpg"/>
            </div>
            
        </div>
    )

}