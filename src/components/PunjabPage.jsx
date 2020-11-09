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
import ProvinceCardsShow from './ProvinceCardsShow';

class Punjab extends React.Component{
    render(){
        return(
            <div >
                <Header />
                <NavbarB/>
                <JumboImg/>
                <LastSearch/>
                <ProvinceCardsShow/>
                <LastAD/>
                <Footer/>
                <FooterTwo/>
            </div>
        )
    }
}

export default Punjab;
