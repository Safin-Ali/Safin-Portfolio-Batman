import React from 'react';
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';
import HeroSection from './HeroSection';
import MyProjects from './MyProjects';
import Services from './Services';
import SkillSection from './SkillSection';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <SkillSection></SkillSection>
            <Services></Services>
            <MyProjects></MyProjects>
            <AboutMe></AboutMe>
            <ContactForm></ContactForm>
        </>
    );
};

export default Home;