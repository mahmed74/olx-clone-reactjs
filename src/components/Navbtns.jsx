import React from 'react';
import '../App.css'
import OlxSellbutton from "../images/olxSellButton.png";


export default class Btns extends React.Component{
    render(){
        return(
            <div className="btnmainDiv">
                <div className="loginBtn">
                    <a href="#">Login</a>
                </div>
                <div className="SellBtn">
                <img src={OlxSellbutton} alt="sell" width="110px" height="50px"/>
                </div>
            </div>
        )
    }
}