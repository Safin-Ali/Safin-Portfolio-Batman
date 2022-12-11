import React from 'react';
import ShowcaseCard from '../../components/showcase-card/ShowcaseCard';
import useFetch from '../../Hooks/useFetch';

const MyProjects = () => {
    const projectsData = useFetch('projectsData.json');
    return (
        <section className="my-[3%]" id="projects">
        <h3 className="text-3xl text-center text-glow mb-5 font-bold text-sweetWhite">My Projects</h3>
    
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center py-[1.5%] px-[4%]">
            {
                projectsData?.map(elm => <ShowcaseCard key={elm.id} data={elm}></ShowcaseCard>)
            }
        </div>
        </section>
    );
};

export default MyProjects;