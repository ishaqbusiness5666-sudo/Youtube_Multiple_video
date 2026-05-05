import React from 'react'
import Video from './Video'

const VideoSection = ({Link,CountNum}) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-3' style={{ width: '80%', margin: '0 auto' }}>
        {Array.from({ length: CountNum }, (_, index) => (
            <Video key={index} Link={Link} />
        ))}
    </div>
  )
}

export default VideoSection
