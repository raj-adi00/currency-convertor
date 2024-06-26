import React, { useContext } from 'react';
import From from './From';
import To from './To';
import './App.css'
import Pagecontext from './context/Pagecontext';
function App() {
  const ref = useContext(Pagecontext);
  const { tocurrencyvalue, settocurrencyvalue, fromcurrencyvalue, setfromcurrencyvalue } = ref;
  function swapcurr() {
    let z = tocurrencyvalue;
    settocurrencyvalue(fromcurrencyvalue);
    setfromcurrencyvalue(z);
  }
  return (
    <>

      <h2 className='text-center font-bold text-5xl text-red-950 bg-orange-200 w-1/2 m-auto p-2 min-w-60'>Currency Converter</h2>
      <div className='flex justify-center w-screen items-center h flex-col gap-4'>
        <div className='bg-gray-300 flex justify-between rounded-lg px-5 py-10 font-bold'>
          <From />
        </div>
        <div className='absolute'><button className='bg-blue-600 rounded-lg px-5 font-bold py-1' onClick={swapcurr}>Swap</button></div>
        <div className='bg-gray-300 flex justify-between rounded-lg px-5 py-10 font-bold'>
          <To />
        </div>
      </div>
    </>
  )
}

export default App