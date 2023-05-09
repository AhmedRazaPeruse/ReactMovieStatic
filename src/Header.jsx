// function Header() {
//     let type = "Header"
//     return(
//         <dvi className="App-header">
//             <h1>{type}</h1>
//         </dvi>
//     );
// }

// const Header = ()  => {

// }

// const Header = () => <h1>Ahmed</h1>

// const Header = (a,b) => a+b;

import Footer from "./components/Footer";
import './Header.css';

const Header = () => {    
    return (
        <div className="HeaderStyle">
            <h1 id="topic">This is a Header Text</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Nulla incidunt dolores quis exercitationem nam, debitis corrupti excepturi 
                vel dolore accusamus provident iure ab? Tenetur doloribus at praesentium ipsam 
                iure cum?
            </p>
            <br></br>
            <Footer />
        </div>
    );
}

// const Footer = () => {
//     return (
//         <h1>This is a Footer Text</h1>
//     );
// }

export default Header;
//export {Footer};


// export {Header,Footer};

// export default Header;
