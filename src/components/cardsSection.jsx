import React from 'react';
import '../App.css';
import Cards from './Cards';


 export default class LastSearch extends React.Component{
    render(){
        return(
            <div className="carousel">
                <div className="CaruselText"><h1>Based on your last Search</h1>
                <div className="container">
                 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                     <div className="carouselItems">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
                <div className="col-md-3"><Cards price={"Rs 55,000"} imgsrc={'https://apollo-singapore.akamaized.net/v1/files/g062w788evec2-PK/image;s=300x600;q=60'} title={"Gymnasius stuff available"} /></div>
                <div className="col-md-3"><Cards price={"Rs 16,800"} imgsrc={'https://apollo-singapore.akamaized.net/v1/files/8l3ie7a2oebu3-PK/image;s=300x600;q=60'} title={"Oppo Mobiles for sale"} /></div>
                <div className="col-md-3"><Cards price={"Rs 2,785,000"} imgsrc={'https://apollo-singapore.akamaized.net/v1/files/6b7g2k5f45za3-PK/image;s=300x600;q=60'} title={"Booking plaza sale"}   /></div>
                <div className="col-md-3"><Cards price={"Rs 625,000"}  imgsrc={'https://apollo-singapore.akamaized.net/v1/files/52am47uhm1mg1-PK/image;s=300x600;q=60'}  title={"Electro generators New"} /></div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="row">
          <div className="col-md-3"><Cards price={"Rs 2,785,000"} imgsrc={'https://apollo-singapore.akamaized.net/v1/files/6b7g2k5f45za3-PK/image;s=300x600;q=60'} title={"Booking plaza"}   /></div>
                <div className="col-md-3"><Cards price={"Rs 625,000"}  imgsrc={'https://apollo-singapore.akamaized.net/v1/files/52am47uhm1mg1-PK/image;s=300x600;q=60'}  title={"Elecctro Generator New"} /></div>
                <div className="col-md-3"><Cards price={"Rs 9,5000,000"} imgsrc={'https://apollo-singapore.akamaized.net/v1/files/6b7g2k5f45za3-PK/image;s=300x600;q=60'} title={"House booking available"}   /></div>
                <div className="col-md-3"><Cards price={"Rs 4,000,000"}  imgsrc={'https://apollo-singapore.akamaized.net/v1/files/f8p1hal0rt5m-PK/image;s=300x600;q=60'}  title={"commercial plots in your town"} /></div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a></div>
      </div></div></div>
            </div>
        )
    }
}

