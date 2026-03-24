import React from 'react'

const Home = () => {
  return (
    <div>
      <div className={`bg-[url(/backdrop.jpeg)] bg-fixed bg-cover h-screen bg-center flex items-center justify-center`}>
        {/* hero section */ }
        <h1 className='font-bold text-white text-5xl text-center p-20'>IIT Patna</h1>
    </div>

    {/*Sponsor*/}
    <div className='flex justify-center'>
      <h1 className='font-bold font-mono text-4xl'>SPONSOR</h1>

    </div>
    </div>
  )
}

export default Home