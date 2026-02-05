import React from 'react'
import {useNavigate}  from 'react-router-dom';

function OpenAccount() {
    
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    }
    return ( 
        <div className='container p- mb-5'>
        <div className='row text-center'>
          <h4 className='mt-5 mb-4' >Open a Zerodha account</h4>
          <p className='mb-5 text-muted' style={{fontSize:"1.05rem"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          
          <button type="button" className="btn btn-primary btn-lg fs-5 mb-5" onClick={handleSignup} style={{width:"16%", margin: "0 auto"}}>Sign up for free</button>
        </div>
        </div>
     );
}

export default OpenAccount;