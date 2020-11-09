import React from 'react';
import '../App.css';
import NavbarB from './AllCategoires';
import LastSearch from './cardsSection';
import Footer, { FooterTwo } from './Footer';
import FreshRecommendations from './FreshRecommendation';
import Header from './header';
import JumboImg from './jumImg';
import LastAD from './lastAD';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Header />
                <NavbarB/>
                <JumboImg/>
                <LastSearch/>
                <FreshRecommendations/>
                <LastAD/>
                <Footer/>
                <FooterTwo/>
            </div>
        )
    }
}

export default Home;
