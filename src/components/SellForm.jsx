import React ,{useState , useEffect} from 'react';
import './SellForm.css';
import {Card , Form , Button , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db,{auth , provider} from '../Config/firebase';
import firebase from 'firebase';
import newCardData from './newCardData';
import {Link} from "react-router-dom"



// function SellForm(){

    



//     return (<>   <div>
                
//     <Container className="d-flex align-items-center justify-content-center " style={{minHeight:"100vh"}}  >
//         <div className="mainSellFormDiv w-100" style={{maxWidth:"400px"}}>
//     <Card>
//          <Card.Body>
//              <h2 className="text-center mb-4" >Sell Form</h2>
//              <Form>
//                  <Form.Group id="Item-title">
//                  <Form.Label>Item Title</Form.Label>
//                  <Form.Control type="text" placeholder="Enter Item Title here" value={values.title}   required />
//                  </Form.Group>
//                  <Form.Group id="Item-price">
//                  <Form.Label>Item Price</Form.Label>
//                  <Form.Control type="text" placeholder="Enter Item Price here" value={values.price}  required />
//                  </Form.Group>
//                  <Form.Group id="Item-imageSrc">
//                  <Form.Label>Item Image Src</Form.Label>
//                  <Form.Control type="text" placeholder="Enter Image src here" value={values.imgsrc}  required />
//                  </Form.Group>
//                  <Button className="w-100" type="submit" onClick={handleAddCard} >Submit Now</Button>
//              </Form>
//          </Card.Body>
//      </Card>
//      </div>
//     </Container>
//  </div> </>)
// }

// export default SellForm;










export default class SellForm extends React.Component{ 
    
    constructor(){
        super()
        this.state = {
            itemTitle:"title",
            itemPrice:"price",
            itemImg:"img",
        }
    }
    
    
    showResult = (e) =>{
        e.preventDefault()
         console.log(this.state)
    console.log(firebase.database)
    firebase.database().ref('newCard').push(this.state)
    console.log(this.state)
    // firebase.database().ref('newCard').on('value',(data)=>{
    //     console.log(data.val())
    //     newCardData.push(data.val())
    //     console.log(newCardData)
    //     this.setState({
    //         valueDemo:"valueDemo",
    //     })
    //     console.log("this is inserted value of data rn ==>" , data.val())
        
    // })
    
      
        
    }

    


        
    

   

    
    

    render(){

        
   

        return(
            <div>
                
                   <Container className="d-flex align-items-center justify-content-center " style={{minHeight:"100vh"}}  >
                       <div className="mainSellFormDiv w-100" style={{maxWidth:"400px"}}>
                   <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >Sell Form</h2>
                            <Form>
                                <Form.Group id="Item-title">
                                <Form.Label>Item Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Item Title here" onChange={(e)=>{this.setState({itemTitle:e.target.value})}} required />
                                </Form.Group>
                                <Form.Group id="Item-price">
                                <Form.Label>Item Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Item Price here"  onChange={(e)=>{this.setState({itemPrice:e.target.value})}} required />
                                </Form.Group>
                                <Form.Group id="Item-imageSrc">
                                <Form.Label>Item Image Src</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image src here"  onChange={(e)=>{this.setState({itemImg:e.target.value})}} required />
                                </Form.Group>
                                <Button className="w-100" type="submit" onClick={this.showResult}>Submit Now</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    </div>
                   </Container>
                </div>
        )
    }
}
  
