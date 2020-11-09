import { Card } from '@material-ui/core';
import React from 'react';
import '../App.css';
import CardData from './CardData';
import Cards from './Cards';
import newCardData from './newCardData';
import firebase from 'firebase'








export default class RecAfterLogin extends React.Component {


constructor(){
    super()
    this.state = {
        myarr : [],
    }
}




    componentDidMount(){
        
        firebase.database().ref('newCard').on('value',(data)=>{
            console.log(data.val())
            const mydata = data.val()
        for (let ID in mydata){
            this.state.myarr.push(mydata[ID])
        }
        console.log(this.state.myarr)
        console.log(mydata)
        console.log(newCardData)
        this.setState({
            myarr:this.state.myarr,
        })
    })
    

    }





    // component did mount is running for times need to learn react lifecycles

    render() {


    


        return (
            <div className="FreshRecommendDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="FreshrecHeading">Fresh Recommendations</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            CardData.map((value, index) => {
                                return <div className="col-md-3"><Cards
                                    key={index}
                                    price={value.price}
                                    title={value.title}
                                    place={value.place}
                                    imgsrc={value.imgsrc}
                                /></div>
                            })
                        }
                    </div>
                    <div className="newCardsDiv">
                        <div className="row">
                            {
                                this.state.myarr.map((v, i) => {
                                    return <div className="col-md-3"><Cards
                                        key={i}
                                        price={v.itemPrice}
                                        title={v.itemTitle}
                                        imgsrc={v.itemImg}
                                    /></div>
                                })
                            }
                        </div>
                    </div>

                </div>
                <div className="container ">

                    <div className="buttonLoad ml-5 my-3">
                        <button  className="loadMore"  >Load More</button>
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


