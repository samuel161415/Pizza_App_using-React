import React from 'react'; 
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
        <div  className='aboutTop'
        style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1> ABOUT US</h1>
          <p>This is samiPizza house. It is around 4kilo in Addis Ababa Ethiopia;
Our house basically it serves pizzas but we are planning on 
serving other foods to like Burger. </p>
        </div>
        
    </div>
  )
}

export default About;   