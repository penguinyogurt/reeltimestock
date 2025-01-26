import React, { useState, useRef } from 'react';
import './videos.css';
import VideoCard from './VideoCard.js';
import VideoCard2 from './VideoCard2.js';
import VideoCard3 from './VideoCard3.js';
import VideoCard4 from './VideoCard4.js';
import VideoCard5 from './VideoCard5.js';


const Videos: React.FC = () => {
  return (
    <div className='app_video'>
      <VideoCard />
      <VideoCard2 />
      <VideoCard3 />
      <VideoCard4 />
      <VideoCard5 />
    </div>
  );
};

export default Videos;
