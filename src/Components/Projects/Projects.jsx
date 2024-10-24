import { PROJECTS } from '../../constants';

const Projects = () => {
    return (
        <div className="pb-4">
            <h1 className="text-center my-20 text-4xl">
                Projects
            </h1>

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center gap-10'>
                        <div className='w-full lg:w-1/4'>
                            <img src={project.image} alt={project.title} width={250} height={250} className='mb-6 rounded-xl' />
                        </div>

                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h2 className='mb-2 font-semibold text-2xl '>{project.title}</h2>
                            <p className='mb-4 text-stone-400 '>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span className='mt-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300  ml-3' key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
