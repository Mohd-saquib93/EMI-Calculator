import React, { useEffect, useState } from 'react'

const App = () => {
  const [principale,setPrincipale] = useState(0)
   const [interest,setInterest] = useState(0)
    const [years,setYears] = useState(0)
    const [emi,setEMI] = useState(0)

   
    const handleChange = (e)=>{
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if(id === 'principale'){
      setPrincipale(value);
    }else if(id === 'interest'){
      setInterest(value);
    }else{
      setYears(value);
    }
   }

  //  P(r (1 + r)^n) / ((1 + r)^n)-1))

   const CalculateEMI = () =>{
   let r = interest;
   if(principale && r && years){
    r = r / 12 / 100; // per month converted
    const calcPow = Math.pow(1+r,years * 12);
    const amount = principale * ((r * calcPow) / (calcPow -1))
    setEMI(Math.round(amount));
   }
   }

   useEffect(()=>{
   CalculateEMI()
   },[principale,interest,years])


  return (
 <div className='flex justify-center m-20 '>
     <div className='loan calc w-40px h-450px bg-white mt-10'>
      <h1 className='text-4xl font-bold p-3'>Mortgage Calculator</h1>

      <div className='inputs p-3 '>
        <p className='text-[18px] mt-4'>Principle:</p>
        <input onChange={handleChange} type="number" id='principale' className='h-[35px] w-[100%] border-1 mt-3'/>
        <p className='text-[18px] mt-3'>Interest:</p>
        <input onChange={handleChange} type="number" id='interest' className='h-[35px] w-[100%] border-1 mt-3'/>
        <p className='text-[18px] mt-3'>Years:</p>
        <input onChange={handleChange} type="number" id='years' className='h-[35px] w-[100%] border-1 mt-3'/>
      </div>

      <div className='text-[20px] p-2 mb-3 flex justify-center items-center'>Your EMI is {emi}

      </div>
    </div>
 </div>
  )
}

export default App