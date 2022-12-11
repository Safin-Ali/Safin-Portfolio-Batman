import React from 'react';
import ServiceCard from '../../components/service-card/ServiceCard';
import useFetch from '../../Hooks/useFetch';

const Services = () => {

    const services = useFetch('services.json')

    console.log(services)

    return (
        <section className="my-[3%]" id="services">

        <h3 className="text-3xl text-center text-glow mb-5 font-bold text-sweetWhite">My Services</h3>
    
        {/* <!-- box grid layout --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center py-[1.5%] px-[4%]">
            {
                services?.map((service,idx) => <ServiceCard key={idx} data={service}></ServiceCard>)
            }
        </div>
      </section>
    );
};

export default Services;