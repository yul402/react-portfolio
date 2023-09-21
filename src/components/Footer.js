import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'


// Clickable icon -> open in new tab
function Footer(){
  return(
    <footer>
    {/* <footer className="fixed-bottom"> */}
        <div className="me-5 d-none d-lg-block" style={{fontSize:28}}>
            <span>Connected with me:</span>
        </div>
        <div className='me-4 icon'>
            <a href="https://github.com/yul402" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2xl"/>
            </a>
        </div>
        <div className='me-4 icon'>
            <a href="https://www.linkedin.com/in/ying-li-yul402/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
            </a>
        </div>
        <div className='me-4 icon'>
            <a href="https://stackoverflow.com/users/18808169/yul402" target="_blank">
                <FontAwesomeIcon icon={faStackOverflow} size="2xl"/>
            </a>
        </div>
    </footer>
  )
}

export default Footer;