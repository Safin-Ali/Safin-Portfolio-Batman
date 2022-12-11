import React, { useEffect } from 'react';

const ProgressBar = ({data,idx}) => {
    const {bgColor,name,value,linearColor} = data;

    return (
        <>
                <div className={`text-sweetWhite`}>
                    <h5 className={`m-2 text-2xl font-medium`}>{name}</h5>
                    <div className={`w-full bg-gray-200 rounded-full`}>
                        {
                            bgColor && <div style={{background:`#${bgColor}`,width:`${value}%`}}
                            className={`font-medium skill-count text-center p-1 leading-none rounded-full`}>{value}%
                           </div>                           
                        }
                        {
                            linearColor && <div style={{background: `linear-gradient(to right,#${linearColor[0]},#${linearColor[1]})`,width:`${value}%`}}
                            className={`font-medium skill-count text-center p-1 leading-none rounded-full`}>{value}%
                           </div>
                        }
                    </div>
                </div>
        </>
    );
};

export default ProgressBar;