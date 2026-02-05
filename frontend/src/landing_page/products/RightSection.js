import React from 'react'

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
            <div className='container  mt-5'>
        <div className='row mb-5'>
             <div className='col-5 mt-5' style={{paddingRight:"80px", paddingTop:"150px", paddingLeft:"150px",lineHeight:"1.7rem"}}>
                <h4 className='mb-4'>{productName}</h4>
                <p>{productDescription}</p>
                <div>
                <a href={learnMore} style={{textDecoration:"none"}} >Learn More →</a>
                </div>
            </div>
           
            <div className='col-7 mt-5 mb-5' >
                <img src={imageURL}  />
            </div>
        </div>
    </div>
     );
}

export default RightSection;