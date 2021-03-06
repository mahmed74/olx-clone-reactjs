import { Card } from '@material-ui/core';
import React from 'react';
import '../App.css';
import CardData from './CardData';
import Cards from './Cards';
import newCardData from './newCardData';
import firebase from 'firebase'








export default class FreshRecommendations extends React.Component {













    Extra_row = () =>{

        alert("No cards for now")
           
    }


    // componentDidMount(){
    // //     firebase.database().ref('newCard').on('child_added',(data)=>{
    // //         console.log(data.val())
    // //         newCardData.push(data.val())
    // //         console.log("newCArd array ==>",newCardData)
    //         this.setState({
    //             valueDemo:"valueDemo",
    //         })

    // //         console.log("this is inserted value of data rn ==>" , data.val())
    // //     })
    // }


    // componentDidMount(){
        
    // firebase.database().ref('newCard').on('value',(data)=>{
    //     console.log(data.val())
    //     const mydata = data.val()
        
    // if(newCardData[newCardData.length-1].itemTitle == data.val().itemTitle){
    //     alert("Card already exists")
    // }else {
    // //     newCardData.push(data.val())
    // //     console.log("newCArd array ==>",newCardData)
    // //     console.log(data.val().itemTitle)
    // //     console.log(newCardData[newCardData.length-1])
    //     for (let ID in mydata){
    //         newCardData.push(mydata[ID])
    //     }
    //     console.log(mydata)
    //     console.log(newCardData)

    // this.setState({
    //     valueDemo:"valueDemo",})

    //     firebase.database().ref('newCard').on('value',(data)=>{
    //         console.log(data.val())
    //         const mydata = data.val()
    //         const mynewArr = []
       
    //     for (let ID in mydata){
    //         newCardData.push(mydata[ID])
    //     }
    //     console.log(mynewArr)
    //     console.log(mydata)
    //     console.log(newCardData)
    //     this.setState({
    //         valueDemo:"valueDemo",
    //     })
    // })

    // }


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


