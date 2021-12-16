import '../App.css';
import images from '../react-logo.png'

export default function Navbar(){
return (
<nav>
    <img src={images} alt="images" width="40px" />
    <h3>ReactFacts</h3>
    <h4>React Course - Project 1</h4>
</nav>
);       
}