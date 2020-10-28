import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../App.css';



export default class Cards extends React.Component{

    render(){
        return(
            <div className="CardsDiv">
                <div className="card" style={{width: '16rem' }}>
                    <div className="cardHeader"><span class="badge badge-warning">Featured</span><FavoriteBorderIcon/></div>
        <img className="card-img-top"  height="170px" width="16rem" src={this.props.imgsrc} height="16rem" alt="Card image cap" />
        <div className="card-body">
        <h4 className="card-text cardPrice">{this.props.price}</h4>
        <p className="card-text">{this.props.title}</p>
        <p className="card-text todayPara"><span>TODAY</span></p>
        </div>
      </div>
            </div>
        )
    }
}


