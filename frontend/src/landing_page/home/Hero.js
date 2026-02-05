import React from 'react';

function Hero() {
    return (
        <div className='container p- mb-5'>
        <div className='row text-center'>
          <img src='media/images/homeHero.png' alt='Hero Image' className='mb-4' />
          <h3 className='mt-5' >Invest in everything </h3>
          <p className='mb-5' style={{fontSize:"1.4rem"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          
          <button type="button" className="btn btn-primary btn-lg fs-5 mb-5" style={{width:"16%", margin: "0 auto"}}>Sign up for free</button>
        </div>
        </div>
      );
}

export default Hero;