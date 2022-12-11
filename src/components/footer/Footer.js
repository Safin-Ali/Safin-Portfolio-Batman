import React from 'react';

const Footer = () => {
    return (
        <footer className={`bg-bodyBg border-t p-[1%]`}>
            <div>
                <h3 className="text-2xl text-center my-1 md:my-5 text-glow font-bold text-sweetWhite">
                    Safin Ali
                </h3>

                <div className={`text-center my-1 md:my-5`}>
                    <a href="https://www.facebook.com/safin.ali.55" target={`_blank`} className={`mx-2 text-3xl`}><i class="fa-brands text-blue-600 hover: cursor-pointer fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/safin-ali/" target={`_blank`} className={`mx-2 text-3xl`}><i class="fa-brands text-sky-500 hover: cursor-pointer fa-linkedin"></i></a>
                    <a href="https://github.com/Safin-Ali" target={`_blank`} className={`mx-2 text-3xl`}><i class="fa-brands text-zinc-900 hover: cursor-pointer fa-github"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;