import React from "react";


class Video extends React.Component{
    render(){
        return(
            <div id="video-modal" className="video-modal" data-video-src="https://www.youtube.com/embed/h263F6XRglo">
            <iframe width="100%" height="100%" src="" frameborder="0" allowfullscreen=""></iframe>
            <a class="close-button" href="">
              <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </a>
          </div>

        );
        
    }
}
export default Video;