import React from 'react'

function Education() {
    return ( 
         <div className='container p-5'>
            <div className='row'>
            <div className='col-6'>
                    <img src='media/images/education.svg' className='m-5 ' alt='education' style={{width:"75%"}}/>
                </div>
                <div className='col-6 p-5'>
                    <h3 className='mb-3'>Free and open market education</h3>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                      <a href='#'style={{textDecoration:"none", marginRight:"25px"}}>Varsity  <i class="fa-solid fa-arrow-right"></i> </a>

                      <p className='text-muted mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                      <a href='#'style={{textDecoration:"none", marginRight:"25px"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
            </div>
        </div>
     );
}

export default Education;