import React from 'react';
import '../App.css';


export default class LastAD extends React.Component{
    render(){
        return(
            <div className="lastADDiv">
                <div className="container-fluid fluidContDiv">
                    <div className="imagePhone">
                        <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt=""/>
                    </div>
                    <div className="tryText">
                        <h1>TRY THE OLX APP</h1>
                        <h3>Buy, sell and find just about anything using <br/>the app on your mobile</h3>
                    </div>
                    <div className="socialDiv">
                        <h4>GET YOUR APP TODAY</h4>
                        <div className="SocialImgDiv"><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" width="128px" height="40px" alt="img1"/> <img  width="128px" height="40px" src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" alt="img2"/></div>
                    </div>
                </div>
            </div>
        )
    }
}