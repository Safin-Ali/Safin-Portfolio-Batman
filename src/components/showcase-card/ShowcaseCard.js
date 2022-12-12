import React from 'react';
import { Link } from 'react-router-dom';

const ShowcaseCard = ({data}) => {
    const {name,thumb,technology,liveLink,sourceCode} = data;
    return (
        <>
        <div className="border rounded-md bg-bgCard text-sweetWhite w-full hover:scale-[1.02] cursor-grab duration-[750ms]">
              <div className={`border-b border-blackBlueLow`}><img src={thumb} className="rounded-t-md object-cover p-1" alt="Learn-Programz"/></div>
              <div className="px-4 my-2">
                {/* <!-- project type header --> */}
                <h4 className="text-2xl my-2 font-semibold">{name}</h4>
    
                {/* <!-- technology list --> */}
                <div className="grid grid-cols-3 gap-5 mb-5">
                    {
                        technology.map((elm,idx) => <p key={idx} className="bg-tag drop-shaddow-sa rounded-xl p-1 text-sm text-center font-medium">{elm}</p>)
                    }
                </div>
    
                {/* <!-- Button --> */}
                <div className="flex justify-center gap-x-5 pb-4">
                  <a href={liveLink} target="_blank" className="primary-btn text-white rounded-xl px-4 py-1.5"><i className="fa-regular fa-globe mr-2"></i>Live</a>
                  <a href={sourceCode} target="_blank" className="primary-btn text-white rounded-xl px-4 py-1.5"><i className="fa-brands fa-github mr-2"></i>GitHub</a>
                  <Link to={`/project/${data._id}`} className="primary-btn text-white rounded-xl px-4 py-1.5">More</Link>
                </div>
              </div>
          </div>
        </>
    );
};

export default ShowcaseCard;