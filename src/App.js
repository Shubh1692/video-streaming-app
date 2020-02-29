import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './components/VideoList';
import Video from './components/Video';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    /**
     * video url list
     */
    const videoUrlList = [{
      videoUrl: '/video/sample-video-1.mp4',
      videoName: 'sample video 1',
      videoType: 'video/mp4'
    }, {
      videoUrl: '/video/sample-video-2.mp4',
      videoName: 'sample video 2',
      videoType: 'video/mp4'
    }, {
      videoUrl: '/video/sample-video-3.mp4',
      videoName: 'sample video 3',
      videoType: 'video/mp4'
    }, {
      videoUrl: '/video/sample-video-4.mov',
      videoName: 'sample video 4',
      videoType: 'video/mp4'
    }];
    /**
     * Initial state of component
     */
    this.state = {
      videoUrlList,
      selectedVideo: {
        index: 0,
        ...videoUrlList[3]
      }
    }
  }

  /**
    * This method used for select video for play
   */
  async selectVideo(selectedVideo) {
    await this.setState({
      selectedVideo
    });
  }

  /**
    * Render method of main component
   */
  render() {
    const { videoUrlList = [], selectedVideo = {} } = this.state;
    return (
      <div className='App'>
        <VideoList {...{
          videoUrlList,
          selectedVideo,
          selectVideo: (selectedVideo) => this.selectVideo(selectedVideo)
        }} />
        <Video {...{
          ...selectedVideo
        }} />
      </div>
    )

  }
}
export default App;
