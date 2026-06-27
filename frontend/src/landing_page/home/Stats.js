import React from 'react'

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-5 p-5'>
                    <h3>Trust with confidence</h3>
                    <h5 className='mt-5 '>Customer-first always</h5>
                    <p  className=' mb-5 text-muted'>That's why 1.6+ crore customers trust Finora with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                     <h5 className='mt-5'>No spam or gimmicks</h5>
                    <p className=' mb-5 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a href='#' style={{textDecoration:"none"}}> Our philosophies.</a></p>

                     <h5 className='mt-5'>The Finora universe</h5>
                    <p className=' mb-5 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                     <h5 className='mt-5'>Do better with money</h5>
                    <p className=' mb-5 text-muted'>With initiatives like <a href='#'style={{textDecoration:"none"}}>Nudge</a> and <a href='#'style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 p-5'>
                    <img className='mt-5' src='media/images/ecosystem.png' style={{width: "100%"}}/>
                    <div className='text-center p-3'>
                        <a href='#'style={{textDecoration:"none", marginRight:"25px"}}>Explore our products <i class="fa-solid fa-arrow-right"></i> </a>
                        <a href='#'style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>    
            </div>
        </div>
     );
}

export default Stats;