export default function ProjectCard(props){
    return(
        <div className="bg-white/70 p-4 rounded-md m-10 md:max-w-xl">
            <img src={props.image}/>
            <h4><strong>Project Name: </strong>{props.name}</h4>
            <h4><strong>Stack: </strong>{props.stack}</h4>
            <h4><strong>Description: </strong>{props.description}</h4>
            <h4><strong><a
                        href={props.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        GitHub Repo
                    </a></strong></h4>
        </div>
    )

}