import React, { useEffect, useState } from 'react';

const Carousel = ({data=[],className='',itemHeight='340px'}) => {

    const[count,setCount] = useState(1);

    const[slideDir,setSlideDir] = useState(true);

    function slide () {
        const selectAllSlideItems = document.querySelectorAll('.slide-item');
        selectAllSlideItems.forEach(elm => {
            elm.style = `transform:translateX(-${count*100}%);transition:all 0.3s linear`
        });
    }

    function checkPosition () {
        if(count === 0) {
            setSlideDir(true)
            setCount(count+1)
            return slide()
        }
        if(count === data.length-1) {
            setSlideDir(false)
            setCount(count-1)
            return slide()
        }
        if(!slideDir) {
            setCount(count-1)
            return slide()
        }
        setCount(count+1)
        return slide()
    }

    function loop () {
        return new Promise((resolve)=>{
            setTimeout(()=>{                
                resolve(checkPosition())
            },2500)
        })
    }

    useEffect(()=>{        
        loop()
    },[count])

    return (
        <>
            <div className={`mx-auto ${className} border overflow-hidden hide-scrlbar flex`}>
                {
                    data.map((elm,idx) => <div key={idx} className={`w-full slide-item shrink-0`}>
                            <div className={`bg-cover ${itemHeight}`} style={{backgroundImage:`url(${elm})`,width:'auto'}}>
                            </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Carousel;