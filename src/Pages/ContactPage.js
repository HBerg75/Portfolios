import React from 'react'
import Contactitem from '../Components/Contactitem'
import Tittle from '../Components/Tittle'

function ContactPage() {
    return (
        <div id="contact">
            <div className="title" >
                <Tittle title={'Contact me'} span={'Contact me'} />
            </div>
            <Contactitem />
        </div>
    )
}

export default ContactPage
