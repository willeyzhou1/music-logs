import React from 'react'

const Video = ({title, path}) => {
  return (
    <div className='block border-4 rounded-3xl mx-3 mt-6 pt-6 pb-6 bg-gradient-to-br from-sky-400 to-blue-200 max-w-xs min-w-xs'>
      <h1 className="text-3xl text-center">{title}</h1>
      <video className="mx-auto my-auto mt-4 border-4 border-blue" height="480" width="270" controls>
        <source src={path} />
      </video>
    </div>
  );
}

export default Video;