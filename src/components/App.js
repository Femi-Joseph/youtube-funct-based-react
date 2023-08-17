import React, { useState } from 'react';
import Youtube from './Youtube';
import SearchBar from './SearchBar';
import '../css/style.css';
import IFrame from './IFrame';
import VideoList from './VideoList';

const App = () => {
  const [keywordMatching, SetKeywordMatching] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const searchVideo = async (term) => {
    console.log('searching...', term);
    //axios.get(fetchitem).then((data) => console.log(data));
    const response = await Youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(typeof response);
    SetKeywordMatching(response.data.items);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <SearchBar searchvideo={searchVideo} />
      <IFrame video={selectedVideo} />
      <div>
        <VideoList
          className="video-list"
          handleVideoSelect={handleVideoSelect}
          videos={keywordMatching}
        />
      </div>
    </div>
  );
};

export default App;
