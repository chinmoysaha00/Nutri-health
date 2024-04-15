import React, { useState } from 'react'
import "../style.css"
import Form from './Form'
import brandName from '../Images/Brandname.png'

function Main() {
    const [popup, setPopup] = useState(false)

    const handleClickOpen = () => {
        setPopup(true);
    };

    const handleClose = () => {
        setPopup(false);
    };

 

    return (
        <div className='main'>
            <div className='text-center py-4'>
                <img src={brandName} alt="" height="80px" width="200vw" />
                {/* <h1 className='text-center pt-4 pb-0 main-top-1'>Start Living Healthy</h1>
                <h3 className='text-center main-top-2'>with NUTRIHEALTH</h3> */}
            </div>
            <div className="row py-0 m-0 p-0">
                <div className="col-md-6 col-sm-12 px-5 main-left">
                    <div className='text-center py-4 px-1 '>
                        <button className='btnMain' onClick={handleClickOpen} >Free Ebook</button>
                    </div>
                    <div className='text-center pt-3 pb-3 px-1 '>
                        <a href="/" target='blank'>
                            <button className='btnMain'>Consultation 1:1</button>
                        </a>
                    </div>
                    <div className='text-center pt-4 px-1 '>
                        <a href="https://www.youtube.com" target='blank'>
                            <button className='btnMain'>Healthy Products</button>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 main-right">
                    <div className='main-right-1'>
                        <div className='main-right-text'>
                            <p className='mr-p-1'>Be Healthy,</p>
                            <p className='mr-p-2'>Be Happy </p>
                            <p className='mr-p-3'>Unlock expert nutrition advice with free ebooks from top nutritionists.</p>
                        </div>
                    </div>
                </div>
                {/* <button className='btnModal mx-3' onClick={handleRedirectOpen}>
                    REDIRECT
                </button> */}
            </div>
            {/* {eBook && <Redirect handleRedirectOpen={handleRedirectOpen} handleRedirectClose={handleRedirectClose}/>} */}
            {popup && <Form handleClose={handleClose} handleClickOpen={handleClickOpen} />}
        </div>
    )
}

export default Main
