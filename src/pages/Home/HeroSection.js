import React from 'react';
import AutoType from '../../components/auto-type/AutoType';
import Carousel from '../../components/carousel/Carousel';
import '../../components/auto-type/auto-type.css';

const HeroSection = () => {

    const bannerImg = [
        'https://i.ibb.co/TR6HNmd/Code-typing-rafiki.png',
        'https://i.ibb.co/9nJbhCn/Cross-platform-software-pana.png',
        'https://i.ibb.co/FhtVGMG/Code-typing-amico.png',
        'https://i.ibb.co/ZTyFpMg/Hand-coding-rafiki.png'
    ]

    return (
        <>
        <AutoType text={['Front End Developer','Backend End Developer','MERN Stack Developer']} id={'autoTypeHero'}></AutoType>

            <section className="my-[3%]" id="home">
                {/*  my selft text  */}
                <div className="grid gap-5 sm:grid-cols-2 items-center justify-center py-[1.5%] px-[4%]">
                    <div className="text-center order-2 md:order-none">
                        <h1 className="text-3xl font-semibold text-blackBlue my-[3%">
                            Hi, I am <span id="autoTypeHero"></span>
                        </h1>
                        
                        <div className={`my-5`}>
                            <a href="Safin-Ali-Resume.pdf" className={`primary-btn text-white p-1.5 rounded-lg`} download>Download Resume</a>
                        </div>
                    </div>
                    {/* my-self image*/}
                    <div className="order-1 md:order-none w-full md:w-[80%] mx-auto cursor-grab">
                        <Carousel data={bannerImg} duration={3000} className={`w-full`} itemHeight={'h-[340px] lg:h-[450px]'}></Carousel>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;