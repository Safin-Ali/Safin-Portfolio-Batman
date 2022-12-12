import React from 'react';
import myPhoto from '../../images/sa-safin-ali.jpg'

const AboutMe = () => {
    return (
        <>
            {/* <!-- About Me --> */}
            <section className="my-[3%]" id="about_me">

                <h3 className="text-3xl text-center text-glow mb-5 font-bold text-sweetWhite">About Me</h3>

                {/* <!-- my selft text --> */}
                <div className="grid gap-5 sm:grid-cols-2 items-center justify-center py-[1.5%] px-[4%]">
                <div className="order-2">
                    <h1 className="text-3xl font-semibold text-sweetWhite my-[3%]">MERN Stack Developer</h1>
                    <h3 className="text-xl font-medium text-sweetWhite my-[3%]">Full Stack Web Developer
                    I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.</h3>

                    <ul className="text-sweetWhite">
                    <li className="my-5"><i className="fa-duotone fa-cake-candles mr-5"></i>Birthday : 6-5-2003</li>
                    <li className="my-5"><i className="fa-duotone fa-person mr-5"></i>Age: {new Date().getFullYear() - 2003} years</li>
                    <li className="my-5"><i className="fa-solid fa-map-location-dot mr-5"></i>Address: Bera, Pabna, Bangladesh</li>
                    </ul>
                </div>
                
                {/* <!-- my-self image --> */}
                <div className="order-1 mx-auto w-1/2 cursor-grab rounded-[50%]">
                    <img src={myPhoto} className="rounded-md" alt="Author-Image"/>
                </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;