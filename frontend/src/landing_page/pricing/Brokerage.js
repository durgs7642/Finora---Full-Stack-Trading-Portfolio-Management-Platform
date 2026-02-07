import React from 'react'

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row mb-5 p-5'>
                <div className='col-8 mt-5 text-center '>
                  <a href='#' className='fs-5'  style={{textDecoration:"none"}}>Brokerage calculator</a>
                  <ul style={{lineHeight:"2.5rem", textAlign:"left"}} className='text-muted mt-4'>
                    <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed instead of ₹20 per executed order.</li>

                  </ul>
                </div>
                <div className='col-4 mt-5'>
                    <a href='#' className='fs-5'style={{textDecoration:"none"}}>List of charges</a>
                    
                </div>
            </div>
        </div>
     );
}

export default Brokerage;