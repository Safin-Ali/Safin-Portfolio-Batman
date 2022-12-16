import React from 'react';

const FloatingInput = ({children,type='text',name='',className=''}) => {
    return (
        <div className={`relative ${className} z-0 mb-6 w-full group`}>
            <input type={type} name={name} id="floating_email" className="block py-2.5 px-0 w-full text-sweetWhite bg-transparent border-0 border-b border-blackBlueLow  appearance-none focus:outline-none focus:ring-0 focus:border-bootstrap peer" placeholder=" " required autoComplete={'off'}/>
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-sweetWhite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bootstrap peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{children}</label>
        </div>
    );
};

export default FloatingInput;