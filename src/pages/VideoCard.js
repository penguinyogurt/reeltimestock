import React, { useRef, useState } from 'react';
import video1 from "../video/Video1.mp4"; // Convert to .mp4 for compatibility
import './VideoCard.css';

function VideoCard() {
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
        <div className="videoCard">
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="videoCard_player"
                src={video1}
                alt="Reel video"
                loop
                autoPlay
                muted
                controls
            />
        </div>
    );
}

export default VideoCard;
