import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer mt-1 shadow-lg py-2 d-flex justify-content-center align-items-center'>
            <div className='text-center '>
                <a href="/" target='blank' className='icon mx-3 awesomeIcon'><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="/" target='blank' className='icon mx-3 awesomeIcon'><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="/" target='blank' className='icon mx-3 awesomeIcon'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="/" target='blank' className='icon mx-3 awesomeIcon'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="/" target='blank' className='icon mx-3 awesomeIcon'><FontAwesomeIcon icon={faYoutube} /></a>
            </div>

        </div>
    )
}

export default Footer
