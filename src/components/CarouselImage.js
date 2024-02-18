import CarouselJson from "../json/HomepageCarousel.json";

// Array of object:
// Object: srcURL, header, caption

export default function Carousel() {

	function SetButtons(){
    let buttons = [];
		for (let i = 0; i<CarouselJson.length; i++)
		{ 
      var classActive = "shadow-lg";
      if (i === 0){
        classActive += " active";
      }

      buttons.push(<button type="button" key={CarouselJson[i].header} data-bs-target="#highlight" data-bs-slide-to={i} className={classActive}></button>);
		}	

    return buttons;
	}

  function DisplayCarousel(){
    let div = [];

    for (let i = 0; i <CarouselJson.length; i++)
    { 
      let classActive = "carousel-item";

      if (i === 0){
        classActive += " active";
      }

      div.push(
        <div className={classActive} key={CarouselJson[i].header}>
          <img src={"/Kudoshi-website/"+CarouselJson[i].srcUrl} alt={CarouselJson[i].header} className="d-block" style={{width:"100%", height:"auto"}}/>
          <div className="carousel-caption text-shadow-medium shadow-lg BGCarouselText rounded-pill">
            <h3 className="h5">{CarouselJson[i].header}</h3>
            <p className="fs-6">{CarouselJson[i].caption}</p>
          </div>  
        </div>
      );
    }

    return div;
            
  }

    return (
    	<div className='BGBrandColor d-flex justify-content-center align-items-center'>
				<div id="highlight" className='carousel slide' data-bs-ride="carousel">
        {/* Indicators/dots */}
          <div className="carousel-indicators">
            {SetButtons()}
          </div>
          {/* Carousel */}
          <div className="carousel-inner justify-content-center align-items-center">
            {DisplayCarousel()}
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