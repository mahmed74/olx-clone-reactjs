import React from 'react';
import '../App.css'
import Selector from './autocomplete';
import Searchbar from './searchBar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Btns from './Navbtns';


export default class Header extends React.Component{
    render(){
        return(
            <div className="mainDiv">
                <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
        </a>
        <Selector />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbarSearchmainDiv" id="navbarNav">
          
           <Searchbar/><button className="Searchbtn"><SearchOutlinedIcon/></button><div className="BtnsDiv"> <Btns/></div>
        </div>
      </nav>
            </div>
        )
    }
}


// export default class Header extends React.Component{
//     render(){
//         return(
//             <div className="HeaderDivMain">
//                  <header className="text-gray-700 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>          </a>
//           <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//           <Searchbar/><button className="Searchbtn"><SearchOutlinedIcon/></button>
//           </nav>
//           <div className="BtnsDiv"> <Btns/></div>
//         </div>
//       </header>
//             </div>
//         )
//     }
// }