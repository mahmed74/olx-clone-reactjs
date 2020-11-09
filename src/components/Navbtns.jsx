import React from 'react';
import '../App.css'
import OlxSellbutton from "../images/olxSellButton.png";
import {useState} from 'react';
import Modal from 'react-modal';
import './auth_modal.css';
// importing firebase stuff

import {auth , provider} from "../Config/firebase"



// export default class Btns extends React.Component{
//     render(){

//         const [modalIsOpen,setModalIsOpen] = useState(false)

//         return(
            

//         )
//     }
// }

function Btns(){
    // const [modalIsOpen,setModalIsOpen] = useState(false)

    const SignIn = () => {
      // do user login
      auth.signInWithPopup(provider).catch((error) => alert(error.message)); 
      
    };

    return(
        <div>
            <div className="btnmainDiv">
                <div className="loginBtn">
                    <a  data-toggle="modal" data-target="#exampleModalCenter"  >Login</a>
                </div>
                <div className="SellBtn">
                <img src={OlxSellbutton}  alt="sell" width="110px" height="50px"  data-toggle="modal" data-target="#exampleModalCenter" />
                </div>
            </div>

            {/* //  Modal from here */}

            {/* <Modal isOpen={modalIsOpen} > */}
            <section className="Modal-section" >
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="cutBtn"><button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button></div>
                <br/>
            <div className="modal-header  ">
            <div className="modal-title " id="exampleModalLongTitle">
                <div className="CarouselModal">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner bg-light ">
          <div className="carousel-item carousel-itemPopUP active">
            <img className="d-block w-100 "  width="10%" height="10vh"  src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp" alt="First slide" />
            <div className="CarouselData">
            <p>Help make OLX safer place to buy and sell</p>
            </div>
          </div>
          <div className="carousel-item carousel-itemPopUP">
            <img className="d-block w-50 "   width="10%" height="10vh"  src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp" alt="Second slide" />
            <div className="CarouselData">
            <p>Contact and Close Deals Faster</p>
            </div>
          </div>
          <div className="carousel-item carousel-itemPopUP">
            <img className="d-block w-100 " width="10%" height="10vh" src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp" alt="Third slide" />
            <div className="CarouselData">
            <p>Save All your Favourite Iitems in one place</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
                </div>
            </div>
                
              </div>
              <div className="modal-body">
                <div className="ModalAuthBtns">
                    <div className="authBtns"><button>Continue with Facebook</button></div>
                    <div className="authBtns" onClick={SignIn} ><button>Continue with Google</button></div>
                    <div className="authBtns"><button>Continue with Email</button></div>
                    <div className="lastParaPOP">
                      <br/>
                      <p>We won't share your personal details with anyone</p>
                      <br/>
                      <p>If you continue, you are accepting <span>OLX terms and Contitions and privacy policy</span></p>
                    </div>
                </div>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{setModalIsOpen(false)}} >Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div> */}
            </div>
          </div>
        </div>
        </section>

            {/* </Modal> */}

        {/* // Modal till here */}

        </div>
    )
}

export default Btns