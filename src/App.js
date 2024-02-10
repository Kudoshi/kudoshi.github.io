import highlightPic1 from "./assets/images/highlight/hl1.png"
import highlightPic2 from "./assets/images/highlight/hl2.png"
import highlightPic3 from "./assets/images/highlight/hl3.png"
import { useEffect } from "react";


function App() {
  return (
    <div className="App container-fluid m-0 p-0">
        <div className='d-flex justify-content-center align-items-center p-5 BGBrandColor text-white'>
          <div className='px-5 me-4'>
            <img src="/images/kudo.png" alt="Kudo" style={{width:"250px"}} /> 
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='display-4 font-spartan-bold text-center text-wrap'>Brenden Tan "Kudoshi" Poh Guan</div>
            <div className='d-flex font-abeezee-normal justify-content-center align-items-center'>
              <span className='fw-bold font-abeezee-italic p-2 px-3 mx-2'>GAME PROGRAMMER</span> | 
              <span className='fw-bold font-abeezee-italic p-2 px-3 mx-2'>APUGDC PRESIDENT</span> | 
              <span className='fw-bold font-abeezee-italic p-2 px-3 mx-2'>MALAYSIAN</span> | 
              <span className='fw-bold font-abeezee-italic p-2 px-3 mx-2'>GAME DEVELOPER</span> 
            </div>
            <div className='spanLine-white-manual-3 my-3' style={{width: "60vw"}}></div>
            <div className='px-5 font-abeezee-normal' style={{width: "60vw"}}>
              Been making games since 2020. I love playing multiplayer games, doing poster designs, video creation and sharing my passion of game development with others. Started off as a software engineer before falling in love with game development. Also, I am a die-hard fan of Nasi Lemak
            </div>
          </div>
        </div>
        <div className='bg-black' style={{height:"10vh"}}></div>
        <div className='d-flex justify-content-center align-items-center px-5 BGWhitePassive'>
          <div className='text-center BGBrandColorPassive text-white p-3 m-5 d-flex flex-column justify-content-center' style={{width: "20vw", height:"20vw"}}>
            <p className='fw-bold display-2'>18</p>
            <br/>
            <p className='font-abeezee-normal h5 pt-3'>Game Jams Participated</p>
          </div>
          <div className='text-center BGBrandColorPassive text-white p-3 m-5 d-flex flex-column justify-content-center' style={{width: "20vw", height:"20vw"}}>
            <p className='fw-bold display-2'>18</p>
            <br/>
            <p className='font-abeezee-normal h5 pt-3'>Game Jams Participated</p>
          </div>
          <div className='text-center BGBrandColorPassive text-white p-3 m-5 d-flex flex-column justify-content-center' style={{width: "20vw", height:"20vw"}}>
            <p className='fw-bold display-2'>18</p>
            <br/>
            <p className='font-abeezee-normal h5 pt-3'>Game Jams Participated</p>
          </div>
          
        </div>
        <div className='bg-black d-flex justify-content-center align-items-center py-5'>
          <br/>
          <p className="text-white text-center h1 font-spartan-bold">HIGHLIGHTS</p>
        </div>
        {/* CAROUSEL */}
        <div className='bg-black d-flex justify-content-center'>
          <div id="highlight" className='carousel slide' data-bs-ride="carousel">
          {/* Indicators/dots */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#highlight" data-bs-slide-to="0" className="active shadow-lg"></button>
              <button type="button" data-bs-target="#highlight" data-bs-slide-to="1" className="shadow-lg"></button>
              <button type="button" data-bs-target="#highlight" data-bs-slide-to="2" className="shadow-lg"></button>
            </div>
            {/* Carousel */}
            <div className="carousel-inner" style={{height:"600px"}}>
              <div className="carousel-item active">
                <img src={highlightPic1} alt="Los Angeles" className="d-block img-responsive" style={{width:"100vw"}}/>
                <div className="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div> 
              </div>
              <div className="carousel-item">
                <img src={highlightPic2} alt="Chicago" className="d-block img-responsive" style={{width:"100vw"}}/>
                <div className="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago!</p>
                </div> 
              </div>
              <div className="carousel-item">
                <img src={highlightPic3} alt="New York" className="d-block img-responsive" style={{width:"100vw"}}/>
                <div className="carousel-caption">
                  <h3>New York</h3>
                  <p>We love the Big Apple!</p>
                </div>  
              </div>
            </div>
            {/* Button Control */}
            <button className="carousel-control-prev" type="button" data-bs-target="#highlight" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#highlight" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
        <div className='bg-black d-flex justify-content-center align-items-center py-5'>
          <br/>
          <p className="text-white text-center h1 font-spartan-bold"></p>
        </div>

    </div>
  );
}

export default App;
