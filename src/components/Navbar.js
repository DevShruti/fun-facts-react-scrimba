import '../App.css';
import images from '../react-logo.png'

export default function Navbar(){
return (
<nav>
    <img src={images} alt="images" width="40px" className="nav--icon"/>
    <h3 className="nav--logo_text">ReactFacts</h3>
    <h4 className="nav--title">React Course - Project 1</h4>
</nav>
);       
}