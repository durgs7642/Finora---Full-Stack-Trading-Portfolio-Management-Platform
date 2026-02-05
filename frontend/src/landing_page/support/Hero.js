import React from 'react'

function Hero() {
    return ( 
        <section className='container-fluid'id='supportHero'>
          <div className='p-5 heroSetup' id='supportWrapper'>
            <h4>Support Portal</h4>
            <a href='' style={{textDecoration:"none"}}>Track Tickets</a>  
          </div>

          <div className='row  p-5'>
          <div className='col-6 hero-colOne-Setup'>
            <h3 className='fs-4  mb-4'>Search for an answer or browse help topics to create a ticket</h3>
            <input style={{width:"100%", marginBottom:"10px"}} placeholder='Eg. how do I activate F&O, why is my order get rejected..'/> <br/>
            <a href='' style={{marginLeft:"2px", textDecoration:"none"}}>Track account Opening</a>
            <a href='' style={{marginLeft:"10px", textDecoration:"none"}}> Track Segment activation</a>
            <a href='' style={{marginLeft:"10px", textDecoration:"none"}}>Intraday margins</a>
            <a href='' style={{marginLeft:"10px", textDecoration:"none"}}  >Kite user manual</a> 

          </div>
          <div className='col-6  hero-colTwo-Setup'>
             <h3 className='fs-3'>Featured</h3>
             <ol>
              <li><a href=''  style={{textDecoration:"none"}}>Current Takeover and Delisting - January 2024</a></li>
              <li><a href=''  style={{ textDecoration:"none"}}>Latest Intraday Leverage - MIS & CO</a><br/></li>
              </ol>
          </div>
          </div>    

        </section>
     );
}

export default Hero;