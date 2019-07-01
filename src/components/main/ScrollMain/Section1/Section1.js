import React from "react";



class Section1 extends React.Component{
    render(){
        return(
           
              <div className="Section1"  >
                <div className="background-layer">
                  <div className="scene-wrapper" style={{height:645,marginTop:127.5, opacity:1}}>
                     <div className="background-img">
                         <img className="inside-bg" src="https://www.yourprimer.com/assets/img/scenes/scene-desk.jpg" style={{opacity:1 }}/>
                    </div>
                    <div className="paper-cont">
                        <div className="filler">
                        </div>
                        <div className="scene-window">
                         <img className="paper-img" src="https://www.yourprimer.com/assets/img/paper-window.png" style={{opacity:1}}/>
                        </div>
                    
                        <div className="filler js-animate-this" style={{width:100+"%"}}>
                        </div>
                    </div>
                   
                </div>
             </div>
             <div className="foreground-layer">
            <div className="copy-frame">
              <section className="copy-section section-1">
                <div className="copy-wrapper" style={{height: 900}}>
                  <div className="section-fg section-fg-1">
                    <div className="spacer"></div>
                    <div className="filler content-text">
                      <div className="text-slide active text-slide-fix right-placement" data-slide="0" style={{width:402, marginTop:279.5}}>
                        <div className="js-animate-this" style={{opacity:1,transform:"translateY(0)"}}>
                          <h2 className="responsive-h2" style={{fontSize: 37}}>Bite-sized lessons to better your business</h2>
                          <p className="responsive-p" style={{fontSize: 22}}>Download the free Primer app and discover the fast and easy way to learn new business and digital marketing skills. You can take a lesson on business planning, management, and more whenever you have 5 minutes free during your busy day.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
            
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
export default Section1;