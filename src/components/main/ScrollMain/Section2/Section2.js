import React from "react";



class Section2 extends React.Component{
    render(){
        return(
            <div className="Section1"  >
                <div className="background-layer">
                  <div className="scene-wrapper" style={{height: 645,marginTop: 127.5, opacity: 1}}>
                     <div className="background-img">
                         <img className="inside-bg" src="https://www.yourprimer.com/assets/img/scenes/scene-desk.jpg" style={{opacity: 1 }}/>
                    </div>
                    <div className="paper-cont">
                        <div className="filler">
                        </div>
                        <div className="scene-window">
                         <img className="paper-img" src="https://www.yourprimer.com/assets/img/paper-window.png" style={{opacity: 1}}/>
                        </div>
                    
                        <div className="filler js-animate-this" style={{width: 0}}>
                        </div>
              </div>
                   
                </div>
             </div>
            <div className="device-frame" style={{opacity: 1}}>
                        <div className="device-wrapper" style={{marginTop: 194.329}}>
                        <img className="google-phone" src="https://www.yourprimer.com/assets/img/pixel-phone.png" style={{width:276, opacity: 1 }}/>
                            <div className="img-slides">
                                <div className="phone-inside-container" style={{visibility: "visible",top: 0}}>
                                <img className="inside-img" src="https://www.yourprimer.com/assets/img/slides/slide-1_website_lesson_en.jpg" style={{opacity: 1 }}/>
                                </div>
                            
                            </div>
                        </div>
                    </div>
             </div>
            
        
        );
    }
}
export default Section2;