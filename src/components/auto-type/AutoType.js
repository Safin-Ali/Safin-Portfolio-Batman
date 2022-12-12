import React, { useEffect, useState } from 'react';

const AutoType = ({text=[],id}) => {
    const[count,setCount] = useState(0);

    function everyChar (arr) {
        const currArea =  document.getElementById(id);
        return new Promise ((resolve,reject)=>{
            let pushCount = 0;
            const loop = setInterval(async ()=>{
                if(arr.length === pushCount) {
                    clearInterval(loop);
                    await duration();
                    await removeEveryChar()
                    return resolve(true)
                }
                const textNode = document.createTextNode(arr[pushCount])
                currArea.appendChild(textNode)
                pushCount++
            },300)
        })
    }

    function duration () {
        return new Promise(resolve =>{
            setTimeout(()=>{
                resolve(true)
            },2000)
        })
    }

    function removeEveryChar () {
        return new Promise ((resolve,reject)=>{
            const currentText = document.getElementById(id);
            const loop = setInterval(()=>{
                if(!currentText.innerText) {
                    clearInterval(loop)
                    return resolve(true)
                }
                return currentText.innerText = currentText.innerText.substring(0,currentText.innerText.length-1)
            },100)
        })
    }

    async function splitText () {
        const currText = text[count];
        const textNode = currText.split('');
        await everyChar(textNode);
    }

    useEffect(()=>{
        setTimeout(async ()=>{
            if(count === text.length-1){
                await splitText()
                return setCount(0)
            }
                await splitText()
                return setCount(count+1);
        },2000)
    },[count])
};

export default AutoType;