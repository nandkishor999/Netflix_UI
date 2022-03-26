import React from 'react'
function Card(props){
    return(
        <>
         <ul>
          <li>
        <div className='cards'>
    <div className='card'>
      <img  src={props.imgsrc} alt="thumbnail" className='card_img' />
<div className='card_info'> 

<span className='card_category'>{props.title}
  </span>
  <h3 className='card_title'> {props.sname}
    </h3>
   
    <a href={props.link} target='blank' className='btn'>
      <button> Watch Now</button>
      </a></div>
    </div>
    
   
  </div>
  </li>
  </ul>
  
  
            
            </>
    );
}
export default Card;