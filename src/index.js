import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Card from "./Cards.jsx"
import Ndata from './data.jsx'
const img1='https://www.freepnglogos.com/uploads/netflix-logo-0.png';
const linkto='https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fin%2Ftitle%2F81040344';
const linkto2='https://www.netflix.com/in/';

// function nkcard(val){
//   return(
//     <Card
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.links}
    
//     />

//   );

  

// }

ReactDOM.render(
  <>
  <div className='nav'> <p className='para'>UNLIMITED TV SHOWS & MOVIES</p>  <img src={img1} alt="unavailable" className='logo'/>
  <a href={linkto2} target='_blank'><button className='join'>JOIN NOW</button> </a>
  <a href={linkto} target='_blank'><button className='sign'  >SIGN IN</button></a>

</div>

  <div className='whole'>
  
  {Ndata.map(function nkcard(val){
     return(
      <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}/>
     );
  })}
     
    
 
  </div>
 
  </>,
  
  document.getElementById('root')
);


