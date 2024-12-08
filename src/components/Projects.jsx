import { PROJECTS } from "../constants"


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
            {PROJECTS.map((projects, index) =>
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                   <img src={projects.image} 
                   width={150}
                   height={150}
                   alt={projects.title}
                   className="mb-6 rounded"/>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                   <h6 className="mb-2 font-semibold">{projects.title}</h6>
                   <p className="mb-4 text-neutral-400">{projects.description}</p>
                   {projects.technologies.map((tech, map) => 
                    <span key={index} className="mr-2 rouded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 ">
                        {tech}
                    </span>
                   )}
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Projects
