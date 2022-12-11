import React from 'react';
import '../Navbar/navbar.css'

const DarkButton = () => {

    function handleTheme () {
            document.body.classList.toggle('dark-theme');
            document.body.classList.contains('dark-theme') ? localStorage.setItem('theme','dark') : localStorage.setItem('theme','light')
    }

    return (
        <>
            <input type="checkbox" id="themeBtn" />
            <label htmlFor="themeBtn" onClick={handleTheme} className="themeBtn block">

                {/* sun */}
                <svg version="1.1" className="sun" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 156.391 156.391">
                <path style={{fill:'#fdd633'}} d="M140.796,92.339l14.956-12.837l0.39-0.336l-0.39-0.334l-14.604-12.536
            c-2.146-2.287-2.559-4.183-1.79-7.121l6.53-18.594l0.172-0.487l-0.505-0.094l-18.959-3.563c-2.94-0.728-4.426-2.378-5.058-5.213
            l-3.651-19.418l-0.093-0.506l-0.483,0.169l-18.19,6.39c-2.94,0.607-4.755,0.607-7.365-2.062L78.531,0.39L78.195,0l-0.334,0.39
            L64.634,15.798c-1.702,1.843-3.353,2.669-6.025,1.608l-19.15-6.727l-0.484-0.17l-0.095,0.505l-3.75,19.95
            c-0.332,2.271-0.746,3.591-4.153,4.135l-19.419,3.65l-0.506,0.095l0.172,0.484l6.379,18.161c1.6,4.128,0.692,4.705-1.993,7.045
            L0.638,77.385l-0.389,0.335l0.389,0.334l14.594,12.529c1.908,1.81,2.815,3.543,1.792,7.155L10.5,116.307l-0.17,0.484l0.504,0.095
            l18.906,3.554c3.406,0.666,4.479,2.48,5.124,5.288l3.637,19.354l0.096,0.506l0.485-0.173l18.108-6.36
            c3.102-0.788,5.082-0.376,7.131,2.016l12.816,14.929l0.336,0.391l0.335-0.391l12.503-14.565c1.827-1.849,3.808-2.921,7.205-1.811
            l18.54,6.515l0.489,0.17l0.091-0.506l3.553-18.895c0.661-3.163,1.898-4.235,5.29-5.133l19.354-3.636l0.505-0.098l-0.169-0.484
            l-6.371-18.132C137.764,96.271,138.095,94.456,140.796,92.339z M78.196,131.94c-29.54,0-53.487-23.947-53.487-53.486
            c0-29.541,23.947-53.488,53.487-53.488c0.825,0,1.645,0.025,2.46,0.062l0,0c28.396,1.287,51.027,24.711,51.027,53.426
            C131.684,107.994,107.736,131.94,78.196,131.94z" />
                <path style={{fill:'#f2ab0c'}} d="M80.657,25.028v106.85c-0.816,0.038-1.635,0.063-2.46,0.063c29.54,0,53.488-23.947,53.488-53.486
            C131.684,49.739,109.053,26.315,80.657,25.028z" />
                <path style={{fill:'#f4940b'}}
                    d="M80.657,25.028L80.657,25.028c-0.816-0.037-1.635-0.062-2.46-0.062
            c-29.54,0-53.487,23.947-53.487,53.488c0,29.54,23.947,53.486,53.487,53.486c0.825,0,1.645-0.025,2.46-0.063V25.028z" />
                </svg>

                {/* moon */}
                <svg version="1.1" class="moon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 47.167 47.167">
                <path style={{fill:'#bdc3c7'}} d="M46.369,28.793c-11.852,5.935-26.271,1.138-32.206-10.714c-2.748-5.488-3.191-11.524-1.702-17.016
                C1.197,7.236-3.255,21.263,2.544,32.844C8.479,44.696,22.898,49.493,34.75,43.558c6.364-3.187,10.69-8.821,12.417-15.19
                C46.903,28.513,46.64,28.658,46.369,28.793z" />
                </svg>
            </label>
        </>
    );
};

export default DarkButton;