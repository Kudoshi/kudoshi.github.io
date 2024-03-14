import Carousel from "../components/CarouselImage";
import ProjectOverview from "../components/ProjectOverview";

function Homepage() {
  return (
    <div className="App container-fluid m-0 p-0">
      <div className='d-md-flex justify-content-center align-items-center p-5 BGBrandColor text-white'>
        <div className='px-5 me-4 d-flex justify-content-center'>
          <img src="/images/kudo.png" alt="Kudo" style={{width:"250px"}} /> 
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
          <div className='display-4 font-spartan-bold text-center text-wrap'>Brenden Tan "Kudoshi" Poh Guan</div>
          <div className='d-flex font-abeezee-normal justify-content-center align-items-center flex-wrap'>
            <span className='fw-bold font-abeezee-italic p-2 px-3 mx-2'>GAME PROGRAMMER</span> | 
            <span className='fw-bold font-abeezee-italic p-2 px-3 mx-2'>APUGDC PRESIDENT</span> |
            <span className='fw-bold font-abeezee-italic p-2 px-3 mx-2'>GAME DEVELOPER</span> 
          </div>
          <div className='spanLine-white-manual-3 my-1' style={{width: "100%"}}></div>
          <br/>
          <div className='px-5 py-2 font-abeezee-normal text-center' style={{width: "100%"}}>
            Been making games since 2020. I love playing multiplayer games, doing poster designs, video creation and sharing my passion of game development with others. Started off as a software engineer before falling in love with game development. Also, I am a die-hard fan of Nasi Lemak
          </div>
          <br/>
          <div>Follow Me On</div>
          <div className="d-flex justify-content-evenly align-items-center w-75 flex-wrap">
            <div className="d-flex align-items-center">
              <a href="https://www.instagram.com/kudoshi_creates/"><i className="bi bi-instagram text-white fs-3"></i></a>
              <a href="https://www.instagram.com/kudoshi_creates/" className="text-white un-underline p-2" style={{fontSize:"0.85em"}}>Instagram</a>
            </div>
            <div className="d-flex align-items-center">
              <a href="https://github.com/Kudoshi"><i className="bi bi-github text-white fs-3"></i></a>
              <a href="https://github.com/Kudoshi" className="text-white un-underline p-2" style={{fontSize:"0.85em"}}>Github</a>
            </div>
           <div className="d-flex align-items-center">
              <a href="https://www.youtube.com/channel/UC5B8uhuCF0v2v7YH9Tsy3-w"><i className="bi bi-youtube text-white fs-3"></i></a>
              <a href="https://www.youtube.com/channel/UC5B8uhuCF0v2v7YH9Tsy3-w" className="text-white un-underline p-2" style={{fontSize:"0.85em"}}>Youtube</a>
            </div>
            <div className="d-flex align-items-center">
              <a href="https://kudoshi.itch.io/"><img src="/images/logo-itch.png" alt="itch.io" style={{width:"1.5em", height:"1.5em"}}/></a>
              <a href="https://kudoshi.itch.io/" className="text-white un-underline p-2" style={{fontSize:"0.85em"}}>Itch</a>
            </div>
            <div className="d-flex align-items-center">
              <a href="mailto:brendenguan@live.com"><i className="bi bi-envelope-fill text-white fs-3"></i></a>
              <a href="mailto:brendenguan@live.com" className="text-white un-underline p-2" style={{fontSize:"0.85em"}}>Email</a>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center px-5 BGWhitePassive py-4'>
        <div className='text-center BGBrandColorPassive text-white d-flex flex-column justify-content-center my-2' style={{width: "300px", height:"300px"}}>
          <p className='fw-bold display-2'>9</p>
          <br/>
          <p className='font-abeezee-normal h5 pt-3'>Game Jams Participated</p>
        </div>
        <div className='text-center BGBrandColorPassive text-white d-flex flex-column justify-content-center my-2' style={{width: "300px", height:"300px"}}>
          <p className='fw-bold display-2'>20</p>
          <br/>
          <p className='font-abeezee-normal h5 pt-3'>Games Made</p>
        </div>
        <div className='text-center BGBrandColorPassive text-white d-flex flex-column justify-content-center my-2' style={{width: "300px", height:"300px"}}>
          <p className='fw-bold display-2'>1</p>
          <br/>
          <p className='font-abeezee-normal h5 pt-3'>Published App</p>
        </div>
        
      </div>
      <div className='bg-black d-flex justify-content-center align-items-center py-3'>
        <br/>
        <p className="text-white text-center h1 font-spartan-bold">HIGHLIGHTS</p>
      </div>
      {/* CAROUSEL */}
      {Carousel()}
      <div className='bg-black d-flex justify-content-center align-items-center py-3'>
        <br/>
        <p className="text-white text-center h1 font-spartan-bold">LATEST PROJECTS</p>
      </div>
      {ProjectOverview()}
    </div>
  );
}

export default Homepage;
