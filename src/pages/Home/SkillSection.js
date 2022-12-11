import React, { useContext } from 'react';
import ProgressBar from '../../components/skill-loader/ProgressBar';
import { HomePageData } from '../../Context/DataContext';

const SkillSection = () => {
    const {skillData} = useContext(HomePageData);
    return (
        <>
        {/* Skill Section*/}
            <section className="my-[3%]" id="skill">

                <h3 className="text-3xl text-center mb-5 text-glow font-bold text-sweetWhite">Professional Skills</h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] py-[1.5%] px-[4%]">
                    {
                        skillData?.map((data,idx) => <ProgressBar key={idx} idx={idx} data={data}></ProgressBar>)
                    }
                </div>
            </section>
        </>
    );
};

export default SkillSection;