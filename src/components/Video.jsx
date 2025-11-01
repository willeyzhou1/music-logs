import React from 'react'

const Video = ({title, path}) => {
  return (
    <div className='block border-4 border-blue-700 rounded-3xl mx-3 my-6 pt-6 pb-6 bg-gradient-to-br from-sky-400 to-blue-200 max-w-xs min-w-xs drop-shadow-[1.2rem_1.2rem_6px_rgba(0,0,0,0.35)]'>
      <h1 className="text-3xl text-center w-[90%] mx-auto my-0">{title}</h1>
      <video className="mx-auto my-auto mt-4 border-4 rounded-3xl border-blue-700" height="480" width="270" controls>
        <source src={path} />
      </video>
    </div>
  );
}

export default Video;