const a = [];
c;
/*import React from 'react';
class VideoItem extends React.Component {
  render() {
    console.log('VideoItem', this.props.video);
    const vd = { ...this.props.video };
    console.log('vd=', vd[0]); //.props.video.snippet.thumbnails.medium.url);
    //.props.video.snippet.thumbnails.medium.url
    console.log('itemvideo...', this.props.video);

    //const video = this.props.video;
    return (
      <div
        onClick={() => this.props.handleVideoSelect(this.props.video)}
        className=" video-item item"
      >
        <img
          className="ui image"
          //src={vd[0].props.video.snippet.thumbnails.medium.url}
          //alt={vd[0].props.video.snippet.description}
        />
        <div className="content">
          <div className="header "></div>
        </div>
      </div>
    );
  }
}
export default VideoItem;*/
/*import React from 'react';

const VideoItem = ({ video, handleVideoSelect }) => {
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
export default VideoItem;*/
<div>
  <h4>{video.snippet.title}</h4>
  <p>{video.snippet.description}</p>
</div>;
