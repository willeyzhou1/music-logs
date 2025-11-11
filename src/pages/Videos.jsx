import React from 'react'
import Video from '../components/Video'
import VideoData from '../assets/data/VideoData'

export default function Videos() {
  return (
  <div className="max-w-2/3 h-[calc(100vh-10rem)] overflow-y-scroll flex flex-wrap justify-center mx-auto my-0 border-4 border-[rgba(136,209,0)] rounded-3xl bg-[rgba(129,140,248,0.4)] hide-scrollbar">
    {VideoData.map((video, index) => (
      <Video key={index} title={video.title} path={video.path} />
    ))}
  </div>
  )
}
