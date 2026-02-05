import React from 'react'

function Hero() {
    return (
        <div className='container'>

            <div className='row mb-5 border-bottom text-center mt-5' style={{paddingBottom:"50px"}}>
                <h1 className='mt-5'>Pricing</h1>
                <h3 className='text-muted mt-3 mb-5 fs-5'>Free equity investments and flat ₹20 traday and F&O trades</h3>
            </div>
            <div className='row mb-5 text-center '>
                <div className='col-4 mt-5 p-5'>
                    <img src='media/images/pricing0.svg' style={{width:"250px",marginBottom:"20px"}} />
                    <h2>Free equity deliverey</h2>
                    <p className='text-muted' style={{lineHeight:"1.7rem", padding:"10px 25px 10px 10px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/images/intradayTrades.svg' style={{width:"250px",marginBottom:"20px",padding:"40px 0px 10px 0px"}}/>
                    <h2>intraday and F&O Trades</h2>
                    <p className='text-muted' style={{lineHeight:"1.7rem", padding:"10px 25px 10px 10px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mt-5 p-5'>
                    <img src='media/images/pricingMF.svg'style={{width:"250px",marginBottom:"20px"}} />
                    <h2>Free direct MF</h2>
                    <p className='text-muted' style={{lineHeight:"1.7rem", padding:"10px 25px 10px 10px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;