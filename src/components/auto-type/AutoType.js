import React, { useEffect, useState } from 'react';

const AutoType = ({text=[],id}) => {
    const[count,setCount] = useState(0);

    function everyChar (arr) {
        const currArea =  document.getElementById('autoTypeHero')
        return new Promise ((resolve,reject)=>{
            let pushCount = 0;
            const loop = setInterval(async ()=>{
                if(arr.length === pushCount) {
                    clearInterval(loop);
                    await removeEveryChar()
                    return resolve(true)
                }
                const textNode = document.createTextNode(arr[pushCount])
                currArea.appendChild(textNode)
                pushCount++
            },300)
        })
    }

    function removeEveryChar () {
        return new Promise ((resolve,reject)=>{
            const currentText = document.getElementById('autoTypeHero');
            const loop = setInterval(()=>{
                if(!currentText.innerText) {
                    clearInterval(loop)
                    return resolve(true)
                }
                return currentText.innerText = currentText.innerText.substring(0,currentText.innerText.length-1)
            },300)
        })
    }

    useEffect(()=>{
        setTimeout(async ()=>{
                const currText = text[count];
                const textNode = currText.split('')
                await everyChar(textNode);         
                return setCount(count+1);
        },2000)
    },[count])
};

export default AutoType;