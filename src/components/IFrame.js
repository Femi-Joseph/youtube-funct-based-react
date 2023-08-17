import React from 'react';

const IFrame = (props) => {
  const video = props.video;
  console.log('first in Iframe chk', video);
  if (!props.video) {
    return <div></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(props.video);

  return (
    <div>
      <div>
        <div>
          <iframe
            className="iframe-style"
            src={videoSrc}
            allowFullScreen
            title="Video player"
          />
        </div>
      </div>
    </div>
  );
};

export default IFrame;
