import React from 'react';
import AboutMe from './AboutMe';
import HeroSection from './HeroSection';
import Services from './Services';
import SkillSection from './SkillSection';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <SkillSection></SkillSection>
            <AboutMe></AboutMe>
            <Services></Services>
        </>
    );
};

export default Home;