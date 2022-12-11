import React from 'react';

const ServiceCard = ({data}) => {

    const {anim,icon,logo,color,text,desc} = data;
    return (
        <>
        {/* <!-- services 1  --> */}
          <div className="bg-bgCard overflow-hidden drop-shaddow-sa rounded-md">
            {/* <!-- service icon --> */}
            <div className={`text-center mt-4 ${anim}`}>
              {
                icon ?
                <i style={{color:`#${color}`}} className={`${icon} text-6xl`}></i>
                : <img src={logo} className={`mx-auto rounded-md`} alt="Service-Icon" />
              }
            </div>
    
            {/* <!-- Service Info --> */}
            <div className="p-4 text-sweetWhite">
              <h4 className="text-center text-xl font-semibold mb-3">{text}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore eligendi voluptatibus enim, est saepe sunt porro </p>
            </div>
          </div>
        </>
    );
};

export default ServiceCard;