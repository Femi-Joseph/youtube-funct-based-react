import React from 'react';
const VideoItem = ({ video, handleVideoSelect, i }) => {
  return (
    <div onClick={() => handleVideoSelect(video)}>
      <img
        className="imgstyle"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
