import highlightPic1 from "./assets/images/highlight/hl1.png"
import highlightPic2 from "./assets/images/highlight/hl2.png"
import highlightPic3 from "./assets/images/highlight/hl3.png"

export default function test() {
    return(
        <div className='bg-primary'>
        <div className='carousel slide' data-bs-ride="carousel" id="highlight">
        {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#highlight" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#highlight" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#highlight" data-bs-slide-to="2"></button>
          </div>
        </div>
        {/* Carousel */}
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src={highlightPic1} alt="Los Angeles" className="d-block" style={{width:"100%"}}/>
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div> 
          </div>
          <div className="carousel-item active">
            <img src={highlightPic2} alt="Chicago" className="d-block" style={{width:"100%"}}/>
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div> 
          </div>
          <div className="carousel-item">
            <img src={highlightPic3} alt="New York" className="d-block" style={{width:"100%"}}/>
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
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
    );
}