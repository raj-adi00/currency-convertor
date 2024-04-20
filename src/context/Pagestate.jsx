import React, { useEffect, useState } from 'react'
import Pagecontext from './Pagecontext';
export default function Pagestate(props) {
    const [optionData, setOptionData] = useState();
    const [fromvalue, setfromvalue] = useState(1);
    const [tovalue, settovalue] = useState(1);
    const [fromcurrencyvalue, setfromcurrencyvalue] = useState(1);
    const [tocurrencyvalue, settocurrencyvalue] = useState(1);
    useEffect(()=>{
        let ans = tocurrencyvalue*fromvalue/fromcurrencyvalue;
        ans=Math.round(ans*10000)/10000;
        settovalue(ans);
        // console.log(1);
        
    }, [optionData,fromvalue, tocurrencyvalue, fromcurrencyvalue]);
    return (
        <Pagecontext.Provider value={{
            optionData, setOptionData, fromvalue, setfromvalue, tovalue, settovalue,tocurrencyvalue,settocurrencyvalue,fromcurrencyvalue,setfromcurrencyvalue
        }}>
            {props.children}
        </Pagecontext.Provider>
    )
}
