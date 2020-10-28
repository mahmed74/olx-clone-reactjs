import React from 'react';
import "../App.css";
import KeyboardArrowDownIcon from '@material-ui/icons/ExpandMore';
import Dropdown from 'react-bootstrap/Dropdown'


export default class NavbarB extends React.Component{
  render(){
    return(
      <div className="bottom-nav">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ALL CATEGORIES
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Vehicle</Dropdown.Item>
              <ul>
                <a href="#home"><li>
                  Cars
                </li></a>
                <a href="#home"><li>
                  Tractors
                </li></a>
                <a href="#home"><li>
                  Boats
                </li></a>
                <a href="#home"><li>
                  Rickshaw and chingchi
                </li></a>
                <a href="#home"><li>
                  Other vehicles
                </li></a>
                <a href="#home"><li>
                  Bikes
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Animals</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Cats
                </li></a>
                <a href="#home"><li>
                  Dogs
                </li></a>
                <a href="#home"><li>
                  Parrots
                </li></a>
                <a href="#home"><li>
                  horses
                </li></a>
                <a href="#home"><li>
                  Birds
                </li></a>
                <a href="#home"><li>
                  hens
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Fashion And Beauty</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Wedding
                </li></a>
                <a href="#home"><li>
                  Watches
                </li></a>
                <a href="#home"><li>
                  Clothes
                </li></a>
                <a href="#home"><li>
                  Make Up
                </li></a>
                <a href="#home"><li>
                  Jewellery
                </li></a>
                <a href="#home"><li>
                  Accesories
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Mobiles</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Mobile Phones
                </li></a>
                <a href="#home"><li>
                  Accessories
                </li></a>
                <a href="#home"><li>
                  Tablets
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Furniture And Home Decoration</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Office Household items
                </li></a>
                <a href="#home"><li>
                  Office Furniture
                </li></a>
                <a href="#home"><li>
                  Curtains And Blinds
                </li></a>
                <a href="#home"><li>
                  Rugs And Carpets
                </li></a>
                <a href="#home"><li>
                  Painting And Mirrors
                </li></a>
                <a href="#home"><li>
                  Garden and Outdoor
                </li></a>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Jobs</Dropdown.Item>
              <ul>
              <a href="#home"><li>
                  Other Jobs
                </li></a>
                <a href="#home"><li>
                  Part-time
                </li></a>
                <a href="#home"><li>
                  Domestic Staff
                </li></a>
                <a href="#home"><li>
                  Medical
                </li></a>
                <a href="#home"><li>
                  Manufacturing
                </li></a>
                <a href="#home"><li>
                  Human Resources
                </li></a>
              </ul>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <div className="popular-categories">
          <ul>
            <a href="#home"><li>Mobile Phones</li></a>
            <a href="#home"><li>Cars</li></a>
            <a href="#home"><li>Motorcycles</li></a>
            <a href="#home"><li>House</li></a>
            <a href="#home"><li>TV-Video</li></a>
            <a href="#home"><li>Tablets</li></a>
            <a href="#home"><li>Land And Plots</li></a>
          </ul>
        </div>
      </div>
    )
  }
}