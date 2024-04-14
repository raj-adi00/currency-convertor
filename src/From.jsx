import React, { useContext, useEffect } from 'react'
import Pagecontext from './context/Pagecontext'


function From() {
    const context = useContext(Pagecontext)
    const { optionData, setOptionData, fromvalue, setfromvalue, tovalue, settovalue, tocurrencyvalue, fromcurrencyvalue, settocurrencyvalue, setfromcurrencyvalue } = context;
    return (
        <div className='bg-gray-300 flex justify-between rounded-lg px-5 py-10 font-bold'>
            <div>
                <h5>From</h5>
                <input type="number" min={0} value={fromvalue} onChange={(e) => { setfromvalue(e.target.value) }} />
            </div>
            <div>
                <h5>Currency Type</h5>
                <select value={fromcurrencyvalue} onChange={(e) => { setfromcurrencyvalue(e.target.value) }}>
                    {optionData && Object.keys(optionData).map((key) => {
                        return <option key={key} value={optionData[key]}>{key}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default From