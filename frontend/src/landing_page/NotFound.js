import React from 'react'

function NotFound() {
    return ( 
        <div className='container p- mb-5'>
        <div className='row text-center'>
          <h1 className='mt-5 mb-4' >404 Not Found</h1>
          <p className='mb-5 text-muted' style={{fontSize:"1.05rem"}}>Sorry, the page you are looking for doesn't exist. </p> 
        </div>
        </div>
     );
}

export default NotFound;