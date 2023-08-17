import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const renderedVideos = props.videos.map((video, i) => {
    return (
      <VideoItem
        key={video.id.videoId}
        i={i}
        video={video}
        handleVideoSelect={props.handleVideoSelect}
      />
    );
    // console.log(video.id);
  });

  return <div className="video-list">{renderedVideos}</div>;
};
export default VideoList;
