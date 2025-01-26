import React, { useRef, useState } from 'react';
import video1 from "../video/Video5.mp4";
import './VideoCard.css';

function VideoCard1() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        console.log("Video ref:", videoRef.current);
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause();
                setIsVideoPlaying(false);
            } else {
                videoRef.current.play();
                setIsVideoPlaying(true);
            }
        } else {
            console.error("Video ref is null");
        }
    };

    return (
        <div className="videoCard1">
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="videoCard_player"
                src={video1}
                alt="Reel video"
                loop
                autoPlay
                controls
                muted
            />
        </div>
    );
}

export default VideoCard1;
