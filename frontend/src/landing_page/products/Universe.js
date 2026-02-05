import React from 'react'
import {useNavigate}  from 'react-router-dom';

function Universe() {

     const navigate = useNavigate();
    
        const handleSignup = () => {
            navigate('/signup');
        }

    return (
        <div className='container  mt-5'>
            <div className='row mb-5 text-center'>
                <h3>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png' />
                    <p className='text-muted text-center' style={{ fontSize: "14px", padding: "25px 50px 25px 50px", marginLeft: "50px", marginRight: "50px" }}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{ height: "55px" }} />
                    <p className='text-muted text-center' style={{ fontSize: "14px", padding: "25px 50px 25px 50px", marginLeft: "50px", marginRight: "50px" }}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' style={{ height: "40px" }} />
                    <p className='text-muted text-center' style={{ fontSize: "14px", padding: "25px 50px 25px 50px", marginLeft: "50px", marginRight: "50px" }}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                </div>

                <div className='col-4 p-3'>
                    <img src='media/images/zerodhaFundhouse.png'style={{ height: "55px" }} />
                    <p className='text-muted text-center' style={{ fontSize: "14px", padding: "25px 50px 25px 50px", marginLeft: "50px", marginRight: "50px" }}>Our asset management venture
                     that is creating simple and transparent index
                     funds to help you save for your goals.</p>
                </div>

                <div className='col-4 p-3'>
                    <img src='media/images/goldenpiLogo.png' style={{ height: "55px" }} />
                    <p className='text-muted text-center' style={{ fontSize: "14px", padding: "25px 50px 25px 50px", marginLeft: "50px", marginRight: "50px" }}>Bonds trading plateform</p>
                </div> 
                
                <div className='col-4 p-3'>
                    <img src='media/images/dittoLogo.png' style={{ height: "55px" }}/>
                    <p className='text-muted text-center' style={{ fontSize: "14px", padding: "25px 50px 25px 50px", marginLeft: "50px", marginRight: "50px" }}>Personalized advice on life
                     and health insurance. No spam
                     and no mis-selling.</p>
                </div>
            
             <button type="button" className="btn btn-primary btn-lg fs-5 mb-5" onClick={handleSignup} style={{width:"16%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;