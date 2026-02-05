import React from 'react'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
    <div className='container  mt-5 mb-5'>
        <div className='row mt-5'>
           
            <div className='col-4 mt-4' style={{marginLeft:"130px"}}>
                <img src={imageURL}  />
            </div>
             <div className='col-2'></div>
            <div className='col-4 mt-5' style={{marginLeft:"50px"}}>
                <h4 className='mb-4 mt-4'>{productName}</h4>
                <p style={{lineHeight:"1.8rem"}}>{productDescription}</p>
                <div>
                <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo →</a>
                <a href={learnMore}  style={{textDecoration:"none",marginLeft:"90px"}}>Learn More →</a>
                </div>
                <div>
                <a href={googlePlay}> <img src = "media/images/googlePlayBadge.svg" style={{marginTop:"20px"}}/> </a>
                <a href={appStore}> <img src = "media/images/appstoreBadge.svg" style={{ marginLeft:"30px",marginTop:"20px" }}/> </a>
                </div>
            </div>
            <div className='col-2'></div>
        </div>
    </div>
 );
}

export default LeftSection;