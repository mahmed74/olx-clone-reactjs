import React from 'react'
// import JumboImage from './Images/JumboImage.jpg'
// import banner2 from './Images/banner2.jpg'
import "../App.css";


// import CardCarousel from './CardCarousel'


export default class JumboImg extends React.Component{
    render(){
        return(
            <div>
           
            
            <div class="jumbotron banner1 jumbotron-fluid">
                <div className="contaier"></div>
            </div> <br/>
            <div className="container banner2">
            <div class="jumbotron banner2">
                <div className="hidden">
                <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btnHide btn-lg" href="#" role="button">Learn more</a>
  </p>
                </div>
            </div>             
            </div>
 
                    
            
        </div>
        )
    }
}