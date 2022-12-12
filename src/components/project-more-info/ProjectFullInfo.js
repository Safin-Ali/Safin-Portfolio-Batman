import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../carousel/Carousel';

const ProjectFullInfo = () => {

    const {moreInfo} = useLoaderData();

    return (
        <>
            <section className={`py-[1.5%] px-[4%]`}>
                <Carousel data={moreInfo.images} className={`my-5 rounded-lg shadow w-full sm:w-[80%] md:w-[70%] lg:w-1/2`} itemHeight={`h-[200px] sm:h-[340px] md:h-[340px]`}>
                </Carousel>

                <div className={`w-full sm:w-[80%] md:w-[70%] lg:w-1/2 mx-auto my-5`}>
                    <h4 className={`md:text-3xl font-semibold text-sweetWhite my-3`}>{moreInfo.header}</h4>
                    <ul className={`list-disc list-inside`}>
                        {
                            moreInfo.list.map((lst,idx) => <li key={idx} className={`my-2 text-sweetWhite`}>{lst}</li>)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default ProjectFullInfo;