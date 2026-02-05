import React from 'react'
 
function Team() {
    return ( 
        <div className='container'>
            <div className='row text-center m-5'>
                <h4 className='mt-5 '>People</h4>
            </div>
            
            <div className='row mb-5 text-muted' style={{lineHeight:"1.8 "}}>
                <div className='col-2'></div>
                <div className='col-3'>
                    <img src='media/images/nithinKamath.jpg' style={{height:"300px", borderRadius:"50%"}}/>
                    <p style={{fontSize:"18px", textAlign:"center",paddingTop:"20px"}}>Nithin Kamath</p>
                    <p style={{textAlign:"center"}}>Founder, CEO</p>
                </div>
                <div className='col-5 p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#' style={{textDecoration:"none"}}>Homepage </a>/ <a href='#'style={{textDecoration:"none"}}>TradingQnA</a> / <a href='#'style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
     );
}

export default Team;