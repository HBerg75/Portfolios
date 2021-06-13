import React from 'react'
import Title from '../Components/Tittle'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faLaravel, faNode, faPhp, faReact, faSass, faSymfony } from '@fortawesome/free-brands-svg-icons'


function AboutPage() {
    return (
        <div id="about" className="AboutPage">
            <Title title={'About me'} span={'About'} />
            <ImageSection />
            <Title title={'Mes Skills'} span={'Mes Skills'} />
            <div className="icons">
                <div className="js">
                    <SkillsSection skill={'JAVASCRIPT'} progress={70} />
                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faJs} className="icon Js" />
                    </a>

                    <a href="https://nodejs.org/en/docs/guides/getting-started-guide/" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faNode} className="icon Node" />
                    </a>

                    <a href="https://fr.reactjs.org/docs/create-a-new-react-app.html" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faReact} className="icon React" />
                    </a>

                    <p>JQUERY</p>
                </div>


                <div className="js">
                    <SkillsSection skill={'PHP'}  />

                    <a href="https://www.php.net/manual/fr/intro-whatis.php" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faPhp} className="icon Php" />
                    </a>

                    <a href="https://symfony.com/download" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faSymfony} className="icon Symf" />
                    </a>

                    <a href="https://laravel.com/docs/8.x/installation" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faLaravel} className="icon Lara" />
                    </a>

                </div>

                <div className="js">
                    <SkillsSection skill={'HTML & CSS'} />

                    <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faHtml5} className="icon Html" />
                    </a>

                    <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faCss3} className="icon Css" />
                    </a>

                    <a href="https://sass-lang.com/install" target="_blank" className='icon-holder'>
                        <FontAwesomeIcon icon={faSass} className="icon Sass" />
                    </a>
                </div>
                <div className="db">
                    <SkillsSection skill={'DATABASE'} />
                    <p>MongoDB, MYSQL</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
