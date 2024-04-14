import React, { useContext, useEffect } from 'react'
import Pagecontext from './context/Pagecontext';
function To() {
    const context = useContext(Pagecontext);
    const { optionData, setOptionData, settocurrencyvalue, setfromcurrencyvalue, fromcurrencyvalue, tocurrencyvalue, tovalue,settovalue } = context;
    const fetch_data = async () => {
        const req = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_e1lUs8cQKJ0iNvgDslK7cC9xE05iMaF6mdyC7cDJ");
        const data = await req.json();
        setOptionData(data.data);
    };
    useEffect(() => {
        fetch_data();
    }, []);
    return (
        <div className='bg-gray-300  flex justify-between rounded-lg px-5 py-10 font-bold'>
            <div>
                <h5>To</h5>
                <input type="number" value={tovalue}
                    disabled className='bg-white' />
            </div>
            <div>
                <h5>Currency Type</h5>
                <select value={tocurrencyvalue} onChange={(e) => { settocurrencyvalue(e.target.value) }}>
                    {optionData && Object.keys(optionData).map((key) => {
                        return <option key={key} value={optionData[key]}>{key}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default To