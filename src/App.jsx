import React from 'react';
import './App.css';
import NavbarB from './components/AllCategoires';
import LastSearch from './components/cardsSection';
import Footer, { FooterTwo } from './components/Footer';
import FreshRecommendations from './components/FreshRecommendation';
import Header from './components/header';
import JumboImg from './components/jumImg';
import LastAD from './components/lastAD';


class App extends React.Component{
    render(){
        return(
            <div className="App">
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

export default App;
