import React from 'react';
import './App.css';
import NavbarB from './components/AllCategoires';
import LastSearch from './components/cardsSection';
import Footer, { FooterTwo } from './components/Footer';
import FreshRecommendations from './components/FreshRecommendation';
import Header from './components/header';
import JumboImg from './components/jumImg';
import LastAD from './components/lastAD';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/HomePage';
import Punjab from './components/PunjabPage';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice'
import { auth } from './Config/firebase';
import { logout } from "./features/userSlice"
import { useEffect } from "react";
import AppAfterLogin from './components/appAfterLogin';
import SellForm from './components/SellForm';



// class App extends React.Component{

//     render(){

//         const user =  useSelector(selectUser)

//         return(
//             <div className="App">
//                 {user ? (
//                     <><Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route exact path="/punjab" component={Punjab} />
//                 </Switch>
//                 {/* <Home /> */}</>

//                 ):
//                 (
//                     <><h1>Hello you are not logged in</h1></>
//                 )}

//             </div>
//         )
//     }
// }

// export default App;



function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            // console.log("Auth user is => ",authUser)
            if (authUser) {
                // login in user
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName,


                }))
            } else {
                // the user is logged out
                dispatch(logout())
            }
        })
    }, [dispatch]);

    return <div className="App">
        {user ? (
            <>
                {/* <SellForm/> */}

                {/* <AppAfterLogin /> */}

                <Switch>
                    <Route exact path="/" component={AppAfterLogin} />
                    <Route exact path="/sellform" component={SellForm} />
                </Switch>


            </>

        ) :
            (
                <>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/punjab" component={Punjab} />
                    </Switch>
                    {/* <Home /> */}
                </>
            )}
    </div>
}

export default App;