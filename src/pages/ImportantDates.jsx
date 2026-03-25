import React from 'react'

const ImportantDates = () => {
  return (
    <div>
      <div className={`bg-[url(/backdrop.jpeg)] bg-fixed bg-cover h-screen bg-center flex items-center justify-center`}>
        {/* hero section */}
        <h1 className='font-bold text-white text-5xl text-center p-20'>Important Dates</h1>
      </div>
      <div className='flex justify-center flex-col items-center py-30'>
      <ul className="list-disc list-inside text-left">
        <li>Registration Opens – April 1, 2026</li>
        <li>Submission Deadline – May 15, 2026</li>
        <li>Review Results – June 10, 2026</li>
        <li>Final Submission – June 25, 2026</li>
        <li>Conference Date – July 10, 2026</li>
      </ul>
    </div>
    </div>
    
  )
}

export default ImportantDates