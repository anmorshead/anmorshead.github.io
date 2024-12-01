export default function Skills(){
    return(
        <div className="bg-white/60 m-10 p-10 rounded-md">
            <h1 className="font-stick-no-bills font-semibold text-2xl">Skills:</h1>
            <br></br>
            <div className="skills grid grid-cols-1 md:grid-cols-12 gap-4 text-xl">
                <div className="languages col-span-1 md:col-span-6 md:border-r-2 border-black justify-items-center">
                    <h4 className="mb-4">Languages n' Such</h4>
                    <ul className="list-disc">
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>HTML/CSS</li>
                        <li>PHP</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="libraries col-span-1 md:col-span-6 justify-items-center">
                    <h4 className="mb-4">Libraries n' Stuff</h4>
                    <ul className="list-disc">
                        <li>React</li>
                        <li>Laravel</li>
                        <li>Wordpress</li>
                        <li>Git</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}