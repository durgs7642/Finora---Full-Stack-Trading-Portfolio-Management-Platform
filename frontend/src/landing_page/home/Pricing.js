import React from 'react'

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <h3 className='mb-3'>Unbeatable pricing</h3>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                      <a href='#'style={{textDecoration:"none", marginRight:"25px"}}>See pricing  <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center mt-4'>
                        <div className='col p-4 border'>
                            <h1 className='mb-4'><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                            <h1 className='mb-4'><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;