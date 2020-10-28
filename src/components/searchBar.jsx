import React from 'react';
import '../App.css'
import SearchIcon from '@material-ui/icons/Search';

export default class Searchbar extends React.Component{
    render(){
        return(
            <div className="SearchbarDiv">
                <input type="text" placeholder="  Find Cars, Mobile Phones and more..." />
            </div>
        )
    }
}