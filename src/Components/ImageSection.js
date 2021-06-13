import React from 'react'
import about from '../img/profilimg.jpg'
import CV from '../img/CVYanis.pdf'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Lorem Ipsum</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nom</p>
                        <p>Prénom</p>
                        <p>Age</p>
                        <p>Nationalité</p>
                        <p>Languages</p>
                        <p>Pays, Ville</p>
                    </div>
                    <div className="right-section">
                        <p>: Benhagouga </p>
                        <p>: Yanis</p>
                        <p>: 26</p>
                        <p>: Française</p>
                        <p>: Français, Anglais</p>
                        <p>: France , Paris</p>
                    </div>
                </div>
                <button className="btn"><a href={CV} target="_blank">Téléchargez mon CV</a></button>
                
            </div>
        </div>
    )
}

export default ImageSection;