import React from 'react';
import example from '../../images/avatar.png'

const HeroSection = () => {
    return (
        <>
            <section class="my-[3%]" id="home">
                {/*  my selft text  */}
                <div class="grid gap-5 sm:grid-cols-2 items-center justify-center">
                    <div class="text-center order-2 md:order-none">
                        <h1 class="text-3xl text-blackBlue my-[3%">Hi Iam Safin Ali <br /> I am Junior Web Developer</h1>
                    </div>
                    {/* my-self image*/}
                    <div class="border border-x-blackBlue order-1 md:order-none w-1/2 mx-auto cursor-grab rounded-[50%]">
                        <img src={example} alt="Author-Avatar"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;