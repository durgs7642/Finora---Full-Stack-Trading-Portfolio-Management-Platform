import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center m-5'>
                <h4 className='mt-5 mb-5'>We pioneered the discount broking model in India.<br></br>
                   Now, we are breaking ground with our technology.</h4>
            </div>
            
            <div className='row mb-5 border-top text-muted' style={{lineHeight:"1.8 "}}>
                <div className='col-2'></div>
                <div className='col-4 mt-5'>
                    <p className='mt-5 '>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Finora, a combination of Finanace and "Aura", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-4 mt-5'>
                    <p className='mt-5 '>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p><a href = "#" style={{textDecoration:"none"}}>Rainmatter </a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href = "#"  style={{textDecoration:"none"}}>blog</a> or see what the media is <a href = "#" style={{textDecoration:"none"}}>saying about us</a> or learn more about our business and product <a href = "#" style={{textDecoration:"none"}}>philosophies</a>.</p>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
     );
}

export default Hero;