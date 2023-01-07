import React from 'react'

const VideoPlayer = ({link}) => {
  return (
    <div>
    <video width="750" height="500" controls src={link}>

    </video>
</div>
  )
}

export default VideoPlayer