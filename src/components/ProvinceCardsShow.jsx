import React from 'react';
import '../App.css';
import Cards from './Cards';
import ProvinceData from './ProvinceData';

export default class ProvinceCardsShow extends React.Component{
    render(){
        return(
            <div className="FreshRecommendDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="FreshrecHeading">Fresh Recommendations</h1>
                        </div>
                    </div>
                    <div className="row">
                    {
                     ProvinceData.map((value,index)=>{
                         return <div className="col-md-3"><Cards
                         key={index}
                         price = {value.price}
                         title = {value.title}
                         place = {value.place}
                         imgsrc = {value.imgsrc}
                         /></div>
                     })
                 }
                    </div>

                        {/* <div className="row">
                        <div className="col-md-3"><Cards price={CardData[0].price} image={CardData[0].imgsrc} title={CardData[0].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[1].price} image={CardData[1].imgsrc} title={CardData[1].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[2].price} image={CardData[2].imgsrc} title={CardData[2].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[3].price} image={CardData[3].imgsrc} title={CardData[3].title} /></div>
                        </div> */}
                    {/* <div className="row">
                        <div className="col-md-3"><Cards price={CardData[4].price} image={CardData[4].imgsrc} title={CardData[4].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[5].price} image={CardData[5].imgsrc} title={CardData[5].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[6].price} image={CardData[6].imgsrc} title={CardData[6].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[7].price} image={CardData[7].imgsrc} title={CardData[7].title} /></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"><Cards price={CardData[8].price} image={CardData[8].imgsrc} title={CardData[8].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[9].price} image={CardData[9].imgsrc} title={CardData[9].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[10].price} image={CardData[10].imgsrc} title={CardData[10].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[11].price} image={CardData[11].imgsrc} title={CardData[11].title} /></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"><Cards price={CardData[12].price} image={CardData[12].imgsrc} title={CardData[12].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[13].price} image={CardData[13].imgsrc} title={CardData[13].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[14].price} image={CardData[14].imgsrc} title={CardData[14].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[15].price} image={CardData[15].imgsrc} title={CardData[15].title} /></div>
                    </div> */}
                    {/* <div className="row"> */}
                        {/* <div className="col-md-3"><Cards price={CardData[16].price} image={CardData[16].imgsrc} title={CardData[16].title} /></div> */}
                        {/* <div className="col-md-3"><Cards price={CardData[17].price} image={CardData[17].imgsrc} title={CardData[17].title} /></div> */}
                        {/* <div className="col-md-3"><Cards price={CardData[18].price} image={CardData[18].imgsrc} title={CardData[18].title} /></div>
                        <div className="col-md-3"><Cards price={CardData[19].price} image={CardData[19].imgsrc} title={CardData[19].title} /></div> */}
                    {/* </div> */}
                </div>
                <div className="container ">
                   
            <div className="buttonLoad ml-5 my-3">
                <button onClick={this.Extra_row} className="loadMore"  >Load More</button>
            </div> </div>
        
           <div className="ShowAlertDiv">
           <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Sorry!</strong> More Items are Not Avaialble right Now...
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
    
           </div>
            </div>
            </div>
        )
    }
}