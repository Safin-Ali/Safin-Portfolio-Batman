import axios from 'axios';
import React from 'react';
import PrimaryButton from '../../components/button/PrimaryButton';
import FloatingInput from '../../components/float-input/FloatingInput';

const ContactForm = () => {

    async function handleFormData (e) {
        e.preventDefault();
        const form = e.target;
        const visitorName = form.visitorName.value;
        const visitorEmail = form.visitorEmail.value;
        const visitorSubject = form.visitorSub.value;
        const visitorDesc = form.visitorDesc.value;
        const info = {visitorName,visitorEmail,visitorSubject,visitorDesc};
        const res = await axios.post('https://portfolio-server-seven-alpha.vercel.app/sendEmail',info);
        if(res.data.accepted){
            window.alert('mail sent success full')
            return form.reset()
        }        
    }


    return (
        <>
            <section className={`my-[3%]`} id={`contact`}>

                <h3 className="text-3xl text-center mb-5 text-glow font-bold text-sweetWhite">Contact</h3>

                <div className={`grid md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-5 justify-center items-center py-[1.5%] px-[4%]`}>

                    {/* Contact Image */}
                        <div className={`drop-shaddow-sa`}>
                            <img src="https://i.ibb.co/C8sGghg/Mail-sent-1.gif" className={`rounded-sm`} alt="Email_Avatar" />
                        </div>
                        {/* Form */}

                        <div className={`bg-bgCard px-4 w-full lg:w-[80%] mx-auto rounded-xl py-10 shadow-lg`}>
                            <h4 className={`text-3xl text-center font-semibold text-sweetWhite mb-4`}>Send me a message 🚀</h4>
                            <form onSubmit={handleFormData} className={`w-full lg:w-[70%] mx-auto`}>
                                <FloatingInput type={`text`} name={`visitorName`}>Full Name</FloatingInput>
                                <FloatingInput type={`email`} name={`visitorEmail`}>Email Address</FloatingInput>
                                <FloatingInput type={`text`} name={`visitorSub`}>Subject</FloatingInput>
                                <div className={`my-2`}>
                                    <textarea name="visitorDesc" className={`p-5 focus:outline-bootstrap border-blackBlueLow text-sweetWhite bg-transparent border rounded-md w-full`} cols="30" rows="5" placeholder={`Write Message`}></textarea>
                                </div>
                                <div className={`my-2`}>
                                    <PrimaryButton classname={`bg-bootstrap py-3 px-5 hover:drop-shadow-md rounded-xl text-white`}>Send</PrimaryButton>
                                </div>
                            </form>
                        </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;